function main() {
function v0(v1,v2) {
    const v4 = {ownKeys:v2,preventExtensions:v2,defineProperty:v0,getPrototypeOf:v2,deleteProperty:v2,has:v0,set:v1,apply:v2};
    // v4 = .object(ofGroup: Object, withProperties: ["getPrototypeOf", "__proto__", "set", "preventExtensions", "ownKeys", "deleteProperty", "apply"], withMethods: ["defineProperty", "has"])
    const v6 = new Proxy(v0,v4);
    // v6 = .unknown
    const v7 = {toString:0,...Proxy,...v0,...v6};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "toString"])
}
const v8 = v0();
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
