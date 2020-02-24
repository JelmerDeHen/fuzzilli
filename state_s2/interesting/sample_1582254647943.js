function main() {
const v2 = Array(127);
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {deleteProperty:gc,preventExtensions:gc,call:gc,construct:gc,has:gc,getPrototypeOf:gc,isExtensible:gc,get:gc,set:gc,apply:gc};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["preventExtensions", "isExtensible", "getPrototypeOf", "call", "get", "deleteProperty", "set", "has", "apply", "construct"])
const v9 = {get:Promise,set:gc};
// v9 = .object(ofGroup: Object, withProperties: ["get", "__proto__"], withMethods: ["set"])
const v11 = Object.defineProperty(v6,1337,v9);
// v11 = .undefined
const v12 = gc();
// v12 = .undefined
const v13 = gc();
// v13 = .undefined
}
%NeverOptimizeFunction(main);
main();
