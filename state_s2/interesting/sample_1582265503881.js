function main() {
const v5 = new Int32Array(47678);
// v5 = .object(ofGroup: Int32Array, withProperties: ["buffer", "byteOffset", "byteLength", "constructor", "length", "__proto__"], withMethods: ["entries", "copyWithin", "slice", "sort", "reduce", "join", "some", "indexOf", "lastIndexOf", "keys", "find", "forEach", "map", "set", "every", "reduceRight", "fill", "findIndex", "reverse", "includes", "values", "filter", "subarray"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {valueOf:DataView,c:v7,d:DataView,a:1337,length:"undefined",toString:1337,b:1598087699};
// v8 = .object(ofGroup: Object, withProperties: ["c", "toString", "__proto__", "a", "b", "valueOf", "d", "length"])
let v12 = 0;
const v13 = new Uint16Array(v5);
// v13 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
const v14 = v12 + 1;
// v14 = .primitive
v12 = v14;
let v15 = v8;
}
%NeverOptimizeFunction(main);
main();
