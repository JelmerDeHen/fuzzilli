function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
const v7 = {preventExtensions:Object,defineProperty:gc,isExtensible:gc,getOwnPropertyDescriptor:gc,ownKeys:Object,get:Object,apply:gc,call:gc,getPrototypeOf:gc,construct:v2};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "construct"], withMethods: ["preventExtensions", "ownKeys", "get", "getPrototypeOf", "defineProperty", "call", "apply", "isExtensible", "getOwnPropertyDescriptor"])
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
