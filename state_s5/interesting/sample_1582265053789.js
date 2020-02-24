function main() {
const v1 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["getOwnPropertyDescriptor", "get", "deleteProperty", "apply", "preventExtensions", "ownKeys", "getPrototypeOf", "construct", "isExtensible", "defineProperty", "set"])
const v4 = new ArrayBuffer(gc,v1);
// v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v6 = v4.slice(0,0);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v7 = v6.byteLength;
// v7 = .integer
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
}
%NeverOptimizeFunction(main);
main();
