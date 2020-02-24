function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v2 = v1;
const v7 = {preventExtensions:Object,defineProperty:gc,isExtensible:gc,getOwnPropertyDescriptor:gc,ownKeys:Object,get:Object,apply:gc,call:gc,getPrototypeOf:gc,construct:v2};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "construct"], withMethods: ["apply", "ownKeys", "getPrototypeOf", "call", "get", "getOwnPropertyDescriptor", "defineProperty", "isExtensible", "preventExtensions"])
const v9 = new Proxy(gc,v7);
// v9 = .unknown
const v11 = {get:Promise,set:gc};
// v11 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set"])
const v13 = Object.defineProperty(gc,1337,v11);
// v13 = .undefined
const v14 = v9[1337];
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
