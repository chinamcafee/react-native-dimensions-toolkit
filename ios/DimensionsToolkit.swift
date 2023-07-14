import UIKit

@objc(DimensionsToolkit)
class DimensionsToolkit: NSObject {

  @objc(getScreenSize:withRejecter:)
  func getScreenSize(resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
      resolve(getScreenSize())
  }

  func getScreenSize() -> NSDictionary {
    let bounds = UIScreen.main.bounds

    return [
        "width": bounds.size.width,
        "height": bounds.size.height
    ] as NSDictionary
}
}
