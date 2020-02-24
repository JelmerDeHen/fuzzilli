function main() {
const v5 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getPrototypeOf", "get", "preventExtensions", "deleteProperty", "getOwnPropertyDescriptor", "apply", "ownKeys", "construct", "defineProperty", "isExtensible", "set"])
const v7 = new ArrayBuffer(gc,v5);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
