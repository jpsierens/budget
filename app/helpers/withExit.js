export default (func) => (router, path, params) => {
    func(...params);
    return router.push(path);
};
