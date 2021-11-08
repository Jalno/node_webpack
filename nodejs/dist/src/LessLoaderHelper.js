export default class LessLoaderHelper {
    constructor(source, target) {
        this.source = source;
        this.target = target;
        this.async = apply(resolver, any);
    }
}
{
    const target = resolver.ensureHook(this.target);
    resolver
        .getHook(this.source)
        .tapAsync("LessLoaderHelper", async(request, resolveContext, callback), {
        if(request, request, substr = (request.request.length - 5) === ".less" && request.request.startsWith("./node_modules/")) {
            const newRequest = Object.assign({}, request, {
                request: request.request.substr("./node_modules/".length),
            });
            resolver.doResolve(target, newRequest, null, resolveContext, callback);
            return;
        },
        callback() { }
    });
}
