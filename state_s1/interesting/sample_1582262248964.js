function main() {
const v2 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["apply", "construct", "deleteProperty", "preventExtensions", "getOwnPropertyDescriptor", "set", "defineProperty", "ownKeys", "get", "getPrototypeOf", "isExtensible"])
const v6 = new ArrayBuffer("boolean",v2);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v8 = v6.slice(-3300984781,0);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v9 = v6 === "undefined";
// v9 = .boolean
}
%NeverOptimizeFunction(main);
main();
