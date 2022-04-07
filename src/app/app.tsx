import React, { Suspense } from 'react';
import { Redirect, Route, RouteComponentProps, Switch as Routes, withRouter } from 'react-router-dom';
import { Layout, LoadingBar, ScrollToTop } from '../components';
import { DeviceType, useDarkMode, useDeviceType } from '../hooks';
import { getToken } from '../pages/sign-in/sign-in-page';
import { IRoute, routes } from './router-config';
import AppContext, { Context } from './app-context';

const App: React.FC<RouteComponentProps> = ({ history }) => {
  const deviceType = useDeviceType();
  const { isDarkMode, toggle } = useDarkMode();
  const isLogged = getToken();
  const context: Context = {
    user: {
      isLogged: isLogged ? true : false,
    },
    isMobile: deviceType === DeviceType.Mobile ? true : false,
    isTablet: deviceType === DeviceType.Tablet ? true : false,
    isDesktop: deviceType === DeviceType.Desktop ? true : false,
    settings: {
      isDarkMode: isDarkMode,
      changeTheme: toggle,
      deviceType: deviceType,
    }
  }

  function isProtectedRoute(route: IRoute, target: string) {
    if (route.private && !isLogged) {
      return <Redirect to={{ pathname: '/sign-in', state: { target: target } }} />
    } else {
      return route.component && <route.component/>
    }
  }

  return (
    <AppContext.Provider value={context}>
      <Suspense fallback={<LoadingBar />}>
        <Layout>
          <ScrollToTop>
            <Routes>
              {routes.map((route: IRoute) =>
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={route.path}
                  render={() => isProtectedRoute(route, history.location.pathname)}
                />
              )}
              <Redirect exact from='*' to='/not-found' />
            </Routes>
          </ScrollToTop>
        </Layout>
      </Suspense>
    </AppContext.Provider>
  )
};

export default withRouter(App);