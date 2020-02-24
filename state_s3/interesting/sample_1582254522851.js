function main() {
const v1 = [13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v2 = {};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v4 = {};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v6 = 0;
const v8 = [1337,1337,1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v12 = {c:13.37,a:v6,...v2,...v1,...Reflect,...1337,...v2,...v4,...v8};
// v12 = .object(ofGroup: Object, withProperties: ["a", "c", "__proto__", "constructor", "length"], withMethods: ["toLocaleString", "includes", "some", "fill", "map", "sort", "toString", "setPrototypeOf", "reduceRight", "get", "getPrototypeOf", "concat", "filter", "splice", "find", "isExtensible", "keys", "preventExtensions", "ownKeys", "reduce", "forEach", "indexOf", "push", "join", "getOwnPropertyDescriptor", "flatMap", "slice", "unshift", "flat", "deleteProperty", "shift", "copyWithin", "every", "values", "apply", "reverse", "construct", "entries", "set", "pop", "has", "lastIndexOf", "findIndex", "defineProperty"])
const v15 = {get:Symbol,set:Symbol};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v17 = Object.defineProperty(v12,"__proto__",v15);
// v17 = .undefined
}
%NeverOptimizeFunction(main);
main();
