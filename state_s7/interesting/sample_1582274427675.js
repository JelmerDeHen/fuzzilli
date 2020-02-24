function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {e:1337,b:"asyncIterator",length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "b"])
const v6 = {b:v3,toString:v5,a:v5,valueOf:Float64Array,e:v5,length:1337};
// v6 = .object(ofGroup: Object, withProperties: ["a", "b", "valueOf", "e", "toString", "__proto__", "length"])
for (const v7 in v6) {
    const v9 = Object.getOwnPropertyDescriptor(Object,v7);
    // v9 = .object(withProperties: ["configurable", "writable", "enumerable", "value"])
}
}
%NeverOptimizeFunction(main);
main();
