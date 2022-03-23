//
//  ScreenShareServiceManager.m
//
//  Created by Tiago Daniel Jacobs on 11/03/22.
//

#import <Foundation/Foundation.h>

#import "React/RCTBridgeModule.h"
@interface RCT_EXTERN_REMAP_MODULE(BBBN_ScreenShareService, ScreenShareServiceManager, NSObject)

RCT_EXTERN_METHOD(initializeScreenShare)
RCT_EXTERN_METHOD(createScreenShareOffer)
@end
