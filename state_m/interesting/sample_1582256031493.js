function main() {
const v3 = [-606289463];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {b:-606289463,e:-606289463,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "b", "d", "e", "__proto__"])
const v5 = {preventExtensions:"iterator"};
// v5 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
v7.toString = v3;
}
%NeverOptimizeFunction(main);
main();
