function main() {
delete "hasInstance".__proto__;
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [1337,WeakMap,1337,"hasInstance"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {valueOf:1337,b:13.37,a:WeakMap,length:v4,d:WeakMap};
// v8 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "d", "__proto__", "b", "a"])
const v9 = {valueOf:v4,b:v4,a:1337,e:"hasInstance",__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "b", "__proto__", "e"])
let v10 = v8;
with ("5r5KKB/zxR") {
    const v14 = matchAll(matchAll,v4,matchAll);
    // v14 = .unknown
    toString = v14;
    const v15 = new WeakMap(v14);
    // v15 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "delete", "set", "get"])
    "hasInstance"[127] = 13.37;
    const v17 = matchAll();
    // v17 = .unknown
    v17[matchAll] = 0;
}
}
%NeverOptimizeFunction(main);
main();
