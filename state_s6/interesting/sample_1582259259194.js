function main() {
const v1 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "apply", "set", "deleteProperty", "defineProperty", "isExtensible", "ownKeys", "getOwnPropertyDescriptor", "preventExtensions", "get", "getPrototypeOf"])
let v5 = 0;
let v12 = 0;
let v15 = 0;
const v17 = v5 + 1;
// v17 = .primitive
v5 = v17;
const v19 = new ArrayBuffer(gc,v1);
// v19 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v21 = v19.slice(0,0);
// v21 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
}
%NeverOptimizeFunction(main);
main();
