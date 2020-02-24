function main() {
const v4 = new Int16Array(19873);
// v4 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
const v8 = [1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v16 = 0;
const v18 = [1337,1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = {b:13.37,d:1607264097,e:1607264097,constructor:v18,valueOf:WeakSet};
// v19 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "d", "__proto__", "constructor", "b"])
const v21 = {b:13.37,d:1607264097,e:1607264097,constructor:v8,valueOf:WeakSet};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "e", "b", "d", "valueOf"])
for (const v22 of "undefined") {
}
const v23 = gc();
// v23 = .undefined
const v24 = gc();
// v24 = .undefined
}
%NeverOptimizeFunction(main);
main();
