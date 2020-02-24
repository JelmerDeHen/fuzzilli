function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [1337,Float32Array,v6,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v8(v9,v10) {
}
const v11 = {c:-4096,a:"symbol",length:Float32Array,d:v7,b:-4096,__proto__:Float32Array,valueOf:"symbol"};
// v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "valueOf", "d", "b", "a", "c"])
const v14 = new Float64Array(Set);
// v14 = .object(ofGroup: Float64Array, withProperties: ["constructor", "buffer", "__proto__", "byteOffset", "length", "byteLength"], withMethods: ["findIndex", "slice", "map", "find", "includes", "entries", "forEach", "some", "indexOf", "subarray", "reduce", "reduceRight", "fill", "join", "sort", "values", "keys", "copyWithin", "reverse", "filter", "set", "lastIndexOf", "every"])
const v15 = v14.filter(v8,v11);
// v15 = .object(ofGroup: Float64Array, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__", "length", "constructor"], withMethods: ["subarray", "entries", "reduceRight", "reverse", "map", "set", "join", "every", "lastIndexOf", "filter", "some", "values", "includes", "fill", "sort", "findIndex", "reduce", "keys", "forEach", "find", "indexOf", "slice", "copyWithin"])
}
%NeverOptimizeFunction(main);
main();
