function main() {
const v1 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "ownKeys", "defineProperty", "isExtensible", "getPrototypeOf", "get", "deleteProperty", "construct", "preventExtensions", "apply", "getOwnPropertyDescriptor"])
const v5 = new ArrayBuffer("boolean",v1);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v9 = 0;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v14 = v9 + 1;
// v14 = .primitive
v9 = v14;
const v15 = v5.slice(-3300984781,-102906147);
// v15 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
