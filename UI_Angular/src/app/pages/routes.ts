export const routesPaths = {
  main: "/",
  addRecord: "/add-record",
};

export const routesWithoutLeadingSlash = Object.fromEntries(
  Object
    .entries(routesPaths)
    .map(([key, value]) => [key, value.substring(1)])
) as typeof routesPaths;
