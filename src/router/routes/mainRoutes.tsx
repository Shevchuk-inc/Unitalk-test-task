import { UserManagement } from "@/pages/UserManagement";
import { RouteObject } from "react-router-dom";

import { routePaths } from "../routePaths";

const mainRoutes: RouteObject[] = [
  {
    path: routePaths.userManagement,
    element: <UserManagement />,
  },
];

export default mainRoutes;
