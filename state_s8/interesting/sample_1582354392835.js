function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = ["F8+a.RaKn+"];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {__proto__:"F8+a.RaKn+",e:2937671842,c:v4,length:v3};
// v5 = .object(ofGroup: Object, withProperties: ["c", "e", "length", "__proto__"])
let v6 = v5;
const v10 = new Int16Array(v6);
// v10 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
v10.constructor = Uint8ClampedArray;
const v12 = v10.slice(Uint8Array,234126503);
// v12 = .object(ofGroup: Int16Array, withProperties: ["length", "__proto__", "buffer", "byteOffset", "constructor", "byteLength"], withMethods: ["set", "map", "join", "find", "subarray", "reverse", "findIndex", "reduce", "indexOf", "includes", "forEach", "copyWithin", "every", "fill", "sort", "keys", "entries", "filter", "some", "reduceRight", "lastIndexOf", "values", "slice"])
}
%NeverOptimizeFunction(main);
main();
