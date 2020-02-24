function main() {
delete "hasInstance".__proto__;
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1337,WeakMap,1337,"hasInstance"];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {valueOf:1337,b:13.37,a:WeakMap,length:v4,d:WeakMap};
// v8 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "b", "a", "length"])
const v9 = {valueOf:v4,b:v4,a:1337,e:"hasInstance",__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "e", "b", "valueOf"])
let v10 = v8;
with ("5r5KKB/zxR") {
    const v14 = matchAll(matchAll,v4,matchAll);
    // v14 = .unknown
    toString = v14;
    const v15 = new WeakMap(v14);
    // v15 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "get", "delete", "set"])
    "hasInstance"[127] = 13.37;
    const v17 = matchAll();
    // v17 = .unknown
    v17[matchAll] = 0;
}
}
%NeverOptimizeFunction(main);
main();
