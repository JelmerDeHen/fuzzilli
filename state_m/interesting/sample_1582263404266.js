function main() {
const v2 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "ownKeys", "set", "deleteProperty", "defineProperty", "getOwnPropertyDescriptor", "isExtensible", "apply", "get", "preventExtensions", "getPrototypeOf"])
const v4 = new ArrayBuffer(gc,v2);
// v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v5 = v4.slice(2294533746,2294533746);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
