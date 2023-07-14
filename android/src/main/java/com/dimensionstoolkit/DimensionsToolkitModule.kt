package com.dimensionstoolkit

import android.content.Context.WINDOW_SERVICE
import android.graphics.Point
import android.os.Build
import android.view.Display
import android.view.WindowManager
import com.facebook.react.bridge.*
import java.lang.Exception

class DimensionsToolkitModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

  private val density: Float by lazy { reactApplicationContext.resources.displayMetrics.density }

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun getScreenSize(promise: Promise) {

    promise.resolve(getScreenSizeMap())
  }

  private fun getScreenSizeMap(): WritableMap {

    // 跟 ios 保持一致，获取的是物理屏尺寸
    val screenSize = getRealScreenSize()

    val map = Arguments.createMap()
    map.putInt("width", (screenSize.x / density).toInt())
    map.putInt("height", (screenSize.y / density).toInt())

    return map
  }
  private fun getRealScreenSize(): Point {

    val windowManager = reactContext.getSystemService(WINDOW_SERVICE) as WindowManager
    val display = windowManager.defaultDisplay

    val size = Point()

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
      val windowMetrics = windowManager.getMaximumWindowMetrics()
      val widthInDp = windowMetrics.getBounds().width()
      val heightInDp = windowMetrics.getBounds().height()
      size.x = widthInDp
      size.y = heightInDp
    } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.ICE_CREAM_SANDWICH &&
            Build.VERSION.SDK_INT < Build.VERSION_CODES.R
    ) {
      try {

        size.x = Display::class.java.getMethod("getRawWidth").invoke(display) as Int
        size.y = Display::class.java.getMethod("getRawHeight").invoke(display) as Int
      } catch (e: Exception) {}
    }

    return size
  }

  companion object {
    const val NAME = "DimensionsToolkit"
  }
}
