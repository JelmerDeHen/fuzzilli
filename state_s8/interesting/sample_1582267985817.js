function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {__proto__:v2,a:v4,length:Int8Array,e:Int8Array};
// v5 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "a"])
const v6 = new Int8Array(v5);
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
const v8 = v6.filter(Symbol);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteOffset", "__proto__", "byteLength", "length", "constructor", "buffer"], withMethods: ["slice", "every", "entries", "join", "lastIndexOf", "values", "findIndex", "includes", "filter", "map", "sort", "indexOf", "forEach", "set", "reduce", "copyWithin", "reduceRight", "subarray", "find", "some", "keys", "fill", "reverse"])
let v12 = 0;
let v15 = 0;
let v18 = 0;
let v21 = 0;
}
%NeverOptimizeFunction(main);
main();
