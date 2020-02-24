function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {e:1337,b:"asyncIterator",length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e", "length"])
const v6 = {b:v3,toString:v5,a:v5,valueOf:Float64Array,e:v5,length:1337};
// v6 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "e", "b", "toString", "length"])
for (const v7 in v6) {
    const v9 = Object.getOwnPropertyDescriptor(Object,v7);
    // v9 = .object(withProperties: ["enumerable", "value", "writable", "configurable"])
}
}
%NeverOptimizeFunction(main);
main();
