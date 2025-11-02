import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("_layout.tsx"),
  route(":slug", "routes/$slug.tsx"),
  route("/detail/:id", "detail/[id].tsx"),
] satisfies RouteConfig;
