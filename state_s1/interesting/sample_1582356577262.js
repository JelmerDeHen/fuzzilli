function main() {
delete "hasInstance".__proto__;
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,WeakMap,1337,"hasInstance"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {valueOf:1337,b:13.37,a:WeakMap,length:v4,d:WeakMap};
// v8 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "d", "b", "length"])
const v9 = {valueOf:v4,b:v4,a:1337,e:"hasInstance",__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "b", "valueOf", "e"])
let v10 = v8;
with ("5r5KKB/zxR") {
    const v14 = matchAll(matchAll,v4,matchAll);
    // v14 = .unknown
    toString = v14;
    const v15 = new WeakMap(v14);
    // v15 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["has", "set", "delete", "get"])
    "hasInstance"[127] = 13.37;
    const v17 = matchAll();
    // v17 = .unknown
    v17[matchAll] = 0;
}
}
%NeverOptimizeFunction(main);
main();
