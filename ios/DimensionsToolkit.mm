#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(DimensionsToolkit, NSObject)

RCT_EXTERN_METHOD(getScreenSize:(RCTPromiseResolveBlock)resolve 
                  withRejecter:(RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
