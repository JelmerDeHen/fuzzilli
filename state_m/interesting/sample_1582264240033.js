function main() {
const v4 = "unscopable".charCodeAt(-290509396);
// v4 = .integer
const v6 = [1337,-290509396];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {constructor:Uint16Array,b:v6,c:v4,length:13.37};
// v7 = .object(ofGroup: Object, withProperties: ["constructor", "b", "c", "__proto__", "length"])
const v10 = [13.37,13.37,13.37,v7,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v11 = new Float32Array(v10);
// v11 = .object(ofGroup: Float32Array, withProperties: ["constructor", "length", "byteLength", "buffer", "byteOffset", "__proto__"], withMethods: ["values", "copyWithin", "find", "some", "subarray", "findIndex", "reduce", "indexOf", "includes", "forEach", "every", "join", "sort", "reverse", "keys", "entries", "slice", "fill", "map", "lastIndexOf", "filter", "set", "reduceRight"])
const v13 = new Int8Array(v11);
// v13 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
}
%NeverOptimizeFunction(main);
main();
