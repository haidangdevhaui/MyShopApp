/**
 * get route name from nav reducer
 * @param {*object} navState 
 */
export function getRouteName(navState) {
    let { routes } = navState;
    return routes[routes.length - 1].routeName;
}