function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v2 = v1;
const v7 = {preventExtensions:Object,defineProperty:gc,isExtensible:gc,getOwnPropertyDescriptor:gc,ownKeys:Object,get:Object,apply:gc,call:gc,getPrototypeOf:gc,construct:v2};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "construct"], withMethods: ["get", "preventExtensions", "getPrototypeOf", "apply", "call", "isExtensible", "getOwnPropertyDescriptor", "defineProperty", "ownKeys"])
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
