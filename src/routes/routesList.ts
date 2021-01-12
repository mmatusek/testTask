import { MainPage, PostViewPage, UserViewPage } from "../pages";

export const routesList = [
  {
    exact: true,
    path: "/",
    component: MainPage,
  },
  {
    exact: true,
    path: "/user/:id",
    component: UserViewPage,
  },
  {
    exact: true,
    path: "/user/:id/:postId",
    component: PostViewPage,
  },
];
