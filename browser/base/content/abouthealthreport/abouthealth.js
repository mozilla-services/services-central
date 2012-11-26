/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const {classes: Cc, interfaces: Ci, utils: Cu} = Components;

Cu.import("resource://services-common/preferences.js");

const reporter = Cc["@mozilla.org/healthreport/service;1"]
                   .getService(Ci.nsISupports)
                   .wrappedJSObject
                   .reporter;

const prefs = new Preferences("healthreport.about.");

let lastPayload = null;

let sidebarMap = {
  "button-state": "state",
  "button-my-data": "my-data",
  "button-glossary": "glossary",
};

function getLocale() {
   return Cc["@mozilla.org/chrome/chrome-registry;1"]
            .getService(Ci.nsIXULChromeRegistry)
            .getSelectedLocale("global");
}

function init() {
  refreshState();
  updateShowHideData("show");

  window.setInterval(refreshState, 10000);
}

function refreshState() {
  refreshWithDataSubmissionFlag(reporter.willUploadData);
  refreshJSONPayload();
}

/**
 * Update the state of the page to reflect the current data submission state.
 *
 * @param enabled
 *        (bool) Whether data submission is enabled.
 */
function refreshWithDataSubmissionFlag(enabled) {
  document.getElementById("intro-enabled").style.display = enabled ? "" : "none";
  document.getElementById("intro-disabled").style.display = enabled ? "none" : "";

  document.getElementById("checkbox-submission-enabled").checked = !!enabled;
  document.getElementById("checkbox-server-data-stored").checked = reporter.haveRemoteData();

  document.getElementById("btn-optin").style.display = enabled ? "none" : "";
  document.getElementById("btn-optout").style.display = enabled ? "" : "none";
}

function updateShowHideData(active="show") {
  let show = document.getElementById("data-show");
  let hide = document.getElementById("data-hide");

  if (active == "show") {
    show.style.display = "";
    hide.style.display = "none";
    return;
  }

  show.style.display = "none";
  hide.style.display = "";
}

function refreshDataView(data) {
  let show = document.getElementById("data-show");
  let hide = document.getElementById("data-hide");
  let noData = document.getElementById("data-no-data");

  if (!data) {
    show.style.display = "none";
    hide.style.display = "none";
    noData.style.display = "";
    return;
  }

  noData.style.display = "none";
  document.getElementById("raw-data").innerHTML = JSON.stringify(data, null, 2);
}

/**
 * Ensure the page has the latest version of the uploaded JSON payload.
 */
function refreshJSONPayload() {
  reporter.getLastPayload().then(refreshDataView);
}

function onOptInClick() {
  reporter.recordPolicyAcceptance("Clicked opt in button on about page.");
  refreshWithDataSubmissionFlag(true);
}

function onOptOutClick() {
  let prompts = Cc["@mozilla.org/embedcomp/prompt-service;1"]
                  .getService(Ci.nsIPromptService);

  let messages = document.getElementById("optout-slideout");
  let title = messages.getAttribute("slideout_title");
  let message = messages.getAttribute("slideout_message");

  if (!prompts.confirm(window, title, message)) {
    return;
  }

  reporter.recordPolicyRejection("Clicked opt out button on about page.");
  let promise = reporter.requestDeleteRemoteData("Clicked opt out button on about page.");
  if (promise) {
    promise.then(function onDelete() {
      refreshWithDataSubmissionFlag(reporter.willUploadData);
    });
  }

  refreshWithDataSubmissionFlag(false);
}

function onShowRawDataClick() {
  updateShowHideData("show");
  refreshJSONPayload();
}

function onHideRawDataClick() {
  updateShowHideData("hide");
}
