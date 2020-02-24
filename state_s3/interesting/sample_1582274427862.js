function main() {
const v3 = [13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = {e:1337,b:"asyncIterator",length:1337};
// v5 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "e"])
const v6 = {b:v3,toString:v5,a:v5,valueOf:Float64Array,e:v5,length:1337};
// v6 = .object(ofGroup: Object, withProperties: ["e", "length", "toString", "valueOf", "__proto__", "b", "a"])
for (const v7 in v6) {
    const v9 = Object.getOwnPropertyDescriptor(Object,v7);
    // v9 = .object(withProperties: ["configurable", "writable", "enumerable", "value"])
}
}
%NeverOptimizeFunction(main);
main();
