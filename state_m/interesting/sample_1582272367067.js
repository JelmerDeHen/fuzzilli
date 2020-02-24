function main() {
const v3 = {construct:String,isExtensible:String,preventExtensions:Object};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "preventExtensions", "construct"])
const v5 = new Proxy(RegExp,v3);
// v5 = .unknown
const v6 = Object.values(v5);
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();
