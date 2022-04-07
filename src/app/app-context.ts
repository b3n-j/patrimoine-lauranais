import React from "react";
import { DeviceType } from "../hooks";

export interface Context {
  user: {
    isLogged: boolean,
  },
  isMobile: boolean,
  isTablet: boolean,
  isDesktop: boolean,
  settings: {
    isDarkMode: boolean,
    changeTheme: () => void,
    deviceType: DeviceType
  }
}

const AppContext = React.createContext({
  user: {
    isLogged: false,
  },
  settings: {
    isDarkMode: false,
    changeTheme: () => {return},
    deviceType: DeviceType.Desktop
  }
})

export default AppContext;