import React, { useEffect } from "react";
import NProgress from "nprogress";
import './loading-bar.scss'

const LoadingBar: React.FC = () => {
  NProgress.configure({
    showSpinner: false,
  },);

  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  });

  return (<></>)
}

export default LoadingBar;