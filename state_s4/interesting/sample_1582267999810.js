function main() {
const v2 = [13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = {__proto__:v2,a:v4,length:Int8Array,e:Int8Array};
// v5 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "a"])
const v6 = new Int8Array(v5);
// v6 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
const v8 = v6.filter(Symbol);
// v8 = .object(ofGroup: Int8Array, withProperties: ["buffer", "byteOffset", "byteLength", "length", "constructor", "__proto__"], withMethods: ["find", "entries", "some", "map", "copyWithin", "reverse", "indexOf", "keys", "reduceRight", "includes", "slice", "fill", "filter", "every", "findIndex", "sort", "set", "forEach", "subarray", "reduce", "join", "lastIndexOf", "values"])
let v12 = 0;
let v15 = 0;
let v18 = 0;
let v21 = 0;
}
%NeverOptimizeFunction(main);
main();
