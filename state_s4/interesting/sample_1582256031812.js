function main() {
const v3 = [-606289463];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {b:-606289463,e:-606289463,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "b", "d"])
const v5 = {preventExtensions:"iterator"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "preventExtensions"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
v7.toString = v3;
}
%NeverOptimizeFunction(main);
main();
