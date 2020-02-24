function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {__proto__:v2,a:v4,length:Int8Array,e:Int8Array};
// v5 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "e", "length"])
const v6 = new Int8Array(v5);
// v6 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
const v8 = v6.filter(Symbol);
// v8 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "length", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["set", "indexOf", "some", "reduceRight", "findIndex", "fill", "find", "reverse", "map", "subarray", "every", "join", "sort", "includes", "copyWithin", "keys", "entries", "forEach", "reduce", "slice", "filter", "values", "lastIndexOf"])
let v12 = 0;
let v15 = 0;
let v18 = 0;
let v21 = 0;
}
%NeverOptimizeFunction(main);
main();
