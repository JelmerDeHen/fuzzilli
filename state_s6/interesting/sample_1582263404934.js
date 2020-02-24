function main() {
const v2 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "construct", "get", "ownKeys", "preventExtensions", "getPrototypeOf", "isExtensible", "defineProperty", "apply", "getOwnPropertyDescriptor", "deleteProperty"])
const v4 = new ArrayBuffer(gc,v2);
// v4 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v5 = v4.slice(2294533746,2294533746);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
