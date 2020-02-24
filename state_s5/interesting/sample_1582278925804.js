function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v2 = v1;
const v7 = {preventExtensions:Object,defineProperty:gc,isExtensible:gc,getOwnPropertyDescriptor:gc,ownKeys:Object,get:Object,apply:gc,call:gc,getPrototypeOf:gc,construct:v2};
// v7 = .object(ofGroup: Object, withProperties: ["construct", "__proto__"], withMethods: ["get", "getOwnPropertyDescriptor", "apply", "ownKeys", "preventExtensions", "defineProperty", "isExtensible", "call", "getPrototypeOf"])
const v9 = new Proxy(gc,v7);
// v9 = .unknown
const v11 = {get:Promise,set:gc};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__", "get"], withMethods: ["set"])
const v13 = Object.defineProperty(gc,1337,v11);
// v13 = .undefined
const v14 = v9[1337];
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
