function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = ["F8+a.RaKn+"];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = {__proto__:"F8+a.RaKn+",e:2937671842,c:v4,length:v3};
// v5 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "c", "length"])
let v6 = v5;
const v10 = new Int16Array(v6);
// v10 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
v10.constructor = Uint8ClampedArray;
const v12 = v10.slice(Uint8Array,234126503);
// v12 = .object(ofGroup: Int16Array, withProperties: ["byteLength", "byteOffset", "__proto__", "length", "buffer", "constructor"], withMethods: ["some", "find", "forEach", "entries", "reduce", "values", "findIndex", "indexOf", "keys", "map", "every", "lastIndexOf", "reverse", "sort", "subarray", "slice", "includes", "reduceRight", "fill", "copyWithin", "set", "join", "filter"])
}
%NeverOptimizeFunction(main);
main();
