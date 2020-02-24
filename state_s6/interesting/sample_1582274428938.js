function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = {e:1337,b:"asyncIterator",length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "length", "b"])
const v6 = {b:v3,toString:v5,a:v5,valueOf:Float64Array,e:v5,length:1337};
// v6 = .object(ofGroup: Object, withProperties: ["toString", "a", "valueOf", "__proto__", "e", "length", "b"])
for (const v7 in v6) {
    const v9 = Object.getOwnPropertyDescriptor(Object,v7);
    // v9 = .object(withProperties: ["enumerable", "value", "writable", "configurable"])
}
}
%NeverOptimizeFunction(main);
main();
