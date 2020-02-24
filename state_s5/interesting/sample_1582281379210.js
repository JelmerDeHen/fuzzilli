function main() {
const v2 = Object.preventExtensions(Object);
// v2 = .object()
const v4 = Object.freeze(Object);
// v4 = .undefined
const v9 = {deleteProperty:Symbol,getPrototypeOf:parseFloat,defineProperty:gc};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getPrototypeOf", "defineProperty"])
const v11 = new Proxy(arguments,v9);
// v11 = .unknown
}
%NeverOptimizeFunction(main);
main();
