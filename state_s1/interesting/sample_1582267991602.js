function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {__proto__:v2,a:v4,length:Int8Array,e:Int8Array};
// v5 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "length"])
const v6 = new Int8Array(v5);
// v6 = .object(ofGroup: Int8Array, withProperties: ["buffer", "__proto__", "byteOffset", "length", "constructor", "byteLength"], withMethods: ["fill", "set", "sort", "subarray", "slice", "reduce", "includes", "every", "some", "copyWithin", "reduceRight", "reverse", "indexOf", "lastIndexOf", "values", "entries", "keys", "join", "map", "find", "findIndex", "forEach", "filter"])
const v8 = v6.filter(Symbol);
// v8 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "length", "byteOffset", "__proto__", "byteLength"], withMethods: ["subarray", "forEach", "reverse", "copyWithin", "find", "set", "reduceRight", "keys", "includes", "every", "some", "reduce", "lastIndexOf", "sort", "indexOf", "values", "fill", "join", "slice", "entries", "map", "findIndex", "filter"])
let v12 = 0;
let v15 = 0;
let v18 = 0;
let v21 = 0;
}
%NeverOptimizeFunction(main);
main();
