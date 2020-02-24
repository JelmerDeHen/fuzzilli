function main() {
const v3 = [-606289463];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {b:-606289463,e:-606289463,toString:Uint16Array,d:Uint16Array};
// v4 = .object(ofGroup: Object, withProperties: ["e", "d", "toString", "b", "__proto__"])
const v5 = {preventExtensions:"iterator"};
// v5 = .object(ofGroup: Object, withProperties: ["preventExtensions", "__proto__"])
const v7 = new Proxy(v4,v5);
// v7 = .unknown
v7.toString = v3;
}
%NeverOptimizeFunction(main);
main();
