function main() {
const v3 = [-606289463];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {b:-606289463,e:-606289463,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "b", "e"])
const v5 = {preventExtensions:"iterator"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
v7.toString = v3;
}
%NeverOptimizeFunction(main);
main();
