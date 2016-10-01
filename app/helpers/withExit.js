// @flow
export default (func) => (router: Object, path: string, params: Object) => {
    func(...params);
    return router.push(path);
};
