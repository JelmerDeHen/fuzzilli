function main() {
delete "hasInstance".__proto__;
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [1337,WeakMap,1337,"hasInstance"];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {valueOf:1337,b:13.37,a:WeakMap,length:v4,d:WeakMap};
// v8 = .object(ofGroup: Object, withProperties: ["d", "a", "__proto__", "length", "b", "valueOf"])
const v9 = {valueOf:v4,b:v4,a:1337,e:"hasInstance",__proto__:v7};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "a", "b"])
let v10 = v8;
with ("5r5KKB/zxR") {
    const v14 = matchAll(matchAll,v4,matchAll);
    // v14 = .unknown
    toString = v14;
    const v15 = new WeakMap(v14);
    // v15 = .object(ofGroup: WeakMap, withProperties: ["__proto__"], withMethods: ["get", "delete", "set", "has"])
    "hasInstance"[127] = 13.37;
    const v17 = matchAll();
    // v17 = .unknown
    v17[matchAll] = 0;
}
}
%NeverOptimizeFunction(main);
main();
