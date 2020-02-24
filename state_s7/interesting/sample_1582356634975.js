function main() {
delete "hasInstance".__proto__;
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [1337,WeakMap,1337,"hasInstance"];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {valueOf:1337,b:13.37,a:WeakMap,length:v4,d:WeakMap};
// v8 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "b", "__proto__", "length", "a"])
const v9 = {valueOf:v4,b:v4,a:1337,e:"hasInstance",__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "valueOf", "e", "b"])
let v10 = v8;
with ("5r5KKB/zxR") {
    const v14 = matchAll(matchAll,v4,matchAll);
    // v14 = .unknown
    toString = v14;
    const v15 = new WeakMap(v14);
    // v15 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["delete", "set", "get", "has"])
    "hasInstance"[127] = 13.37;
    const v17 = matchAll();
    // v17 = .unknown
    v17[matchAll] = 0;
}
}
%NeverOptimizeFunction(main);
main();
