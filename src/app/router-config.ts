import { ComponentType, lazy, LazyExoticComponent, ReactNode } from "react";
import LoadingBar from "../components/loading-bar/loading-bar";

const HomePage = import('../pages/home/home-page');
const ProfilePage = import('../pages/profile/profile-page');
const SignInPage = import('../pages/sign-in/sign-in-page'); 
const AllItemsPage = import('../pages/all-items/all-items-page');
const ItemPage = import('../pages/all-items/item/item-page');
const SettingsPage = import('../pages/settings/settings-page');
const NotFoundPage = import('../pages/not-found/not-found-page');

export interface IRoute {
  /* Route path */
  path: string;
  /* When true, a path that has a trailing slash will only match a location.pathname with a trailing slash */
  exact: boolean;
  /* Preloader for lazy loading */
  fallback: NonNullable<ReactNode> | null;
  /* Lazy loaded component */
  component: LazyExoticComponent<ComponentType<any>>;
  /* SubRoutes */
  routes?: IRoute[];
  // Redirect path
  redirect?: string;
  /* Should be true if this route is protected by a user authentification */
  private: boolean;
}

export const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    private: false,
    component: lazy(() => HomePage),
    fallback: LoadingBar
  },
  {
    path: '/sign-in',
    exact: true,
    private: false,
    component: lazy(() => SignInPage),
    fallback: LoadingBar
  },
  {
    path: '/profile',
    component: lazy(() => ProfilePage),
    exact: false,
    private: true,
    fallback: LoadingBar
  },
  {
    path: '/all-items',
    component: lazy(() => AllItemsPage),
    exact: true,
    private: false,
    fallback: LoadingBar,
  },
  {
    path: '/all-items/:itemId',
    component: lazy(() => ItemPage),
    exact: true,
    private: false,
    fallback: LoadingBar
  },
  {
    path: '/settings',
    component: lazy(() => SettingsPage),
    exact: false,
    private: true,
    fallback: LoadingBar
  },
  {
    path: '/not-found',
    exact: true,
    private: false,
    fallback: LoadingBar,
    component: lazy(() => NotFoundPage),
  },
]; 