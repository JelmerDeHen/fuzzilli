function main() {
const v3 = [-606289463];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {b:-606289463,e:-606289463,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "d", "toString"])
const v5 = {preventExtensions:"iterator"};
// v5 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
v7.toString = v3;
}
%NeverOptimizeFunction(main);
main();
