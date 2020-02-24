function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {e:1337,b:"asyncIterator",length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "e"])
const v6 = {b:v3,toString:v5,a:v5,valueOf:Float64Array,e:v5,length:1337};
// v6 = .object(ofGroup: Object, withProperties: ["length", "b", "valueOf", "__proto__", "toString", "e", "a"])
for (const v7 in v6) {
    const v9 = Object.getOwnPropertyDescriptor(Object,v7);
    // v9 = .object(withProperties: ["configurable", "writable", "enumerable", "value"])
}
}
%NeverOptimizeFunction(main);
main();
