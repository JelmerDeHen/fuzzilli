function main() {
const v5 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "defineProperty", "isExtensible", "getPrototypeOf", "construct", "deleteProperty", "set", "getOwnPropertyDescriptor", "get", "apply", "preventExtensions"])
const v7 = new ArrayBuffer(gc,v5);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
