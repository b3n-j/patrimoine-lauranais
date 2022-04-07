import { useEffect, useState } from "react";

enum DeviceType {
  Mobile,
  Tablet,
  Desktop,
}

const MOBILE_BREAKPOINT = 480;
const TABLET_BREAKPOINT = 1024;
const DESKTOP_BREAKPOINT = 1025;

function useDeviceType() {
  const [deviceType, setDeviceType] = useState(readDevice(window.innerWidth));
  
  function readDevice(screenWidth: number) {
    if (screenWidth <= MOBILE_BREAKPOINT) return DeviceType.Mobile
    else if (screenWidth >= DESKTOP_BREAKPOINT) return DeviceType.Desktop
    else return DeviceType.Tablet
  }

  useEffect(() => {
    const callback = () => setDeviceType(readDevice(window.innerWidth))
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
  }, []);

  return deviceType;
}

export { useDeviceType, DeviceType }