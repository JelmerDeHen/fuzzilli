function main() {
const v5 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "getOwnPropertyDescriptor", "defineProperty", "deleteProperty", "apply", "get", "construct", "set", "isExtensible", "getPrototypeOf", "preventExtensions"])
const v7 = new ArrayBuffer(gc,v5);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
