/* -*- Mode: C++; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*-
 *
 * The contents of this file are subject to the Netscape Public License
 * Version 1.0 (the "NPL"); you may not use this file except in
 * compliance with the NPL.  You may obtain a copy of the NPL at
 * http://www.mozilla.org/NPL/
 *
 * Software distributed under the NPL is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the NPL
 * for the specific language governing rights and limitations under the
 * NPL.
 *
 * The Initial Developer of this code under the NPL is Netscape
 * Communications Corporation.  Portions created by Netscape are
 * Copyright (C) 1998 Netscape Communications Corporation.  All Rights
 * Reserved.
 */

#ifndef nsGfxCIID_h__
#define nsGfxCIID_h__

#include "nsISupports.h"
#include "nsIFactory.h"
#include "nsIComponentManager.h"

#define NS_IMAGE_CID \
{ 0x6049b260, 0xc1e6, 0x11d1, \
{ 0xa8, 0x27, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_RENDERING_CONTEXT_CID \
{ 0x6049b261, 0xc1e6, 0x11d1, \
{ 0xa8, 0x27, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_DEVICE_CONTEXT_CID \
{ 0x6049b262, 0xc1e6, 0x11d1, \
{ 0xa8, 0x27, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_FONT_METRICS_CID \
{ 0x6049b263, 0xc1e6, 0x11d1, \
{ 0xa8, 0x27, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_REGION_CID \
{ 0xe12752f0, 0xee9a, 0x11d1, \
{ 0xa8, 0x2a, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_SCRIPTABLE_REGION_CID \
{ 0xda5b130a, 0x1dd1, 0x11b2, \
{ 0xad, 0x47, 0xf4, 0x55, 0xb1, 0x81, 0x4a, 0x78 } }

#define NS_BLENDER_CID \
{ 0x6049b264, 0xc1e6, 0x11d1, \
{ 0xa8, 0x27, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_DEVICE_CONTEXT_SPEC_CID \
{ 0xd7193600, 0x78e0, 0x11d2, \
{ 0xa8, 0x46, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_DEVICE_CONTEXT_SPEC_FACTORY_CID \
{ 0xec5bebb0, 0x7b51, 0x11d2, \
{ 0xa8, 0x48, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#define NS_DRAWING_SURFACE_CID \
{ 0x199c7040, 0xcab0, 0x11d2, \
{ 0xa8, 0x49, 0x00, 0x40, 0x95, 0x9a, 0x28, 0xc9 } }

#endif
