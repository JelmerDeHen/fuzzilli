function main() {
let v1 = 13.37;
let v2 = v1;
let v7 = 0;
const v10 = new Int16Array(19873);
// v10 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
const v11 = -Infinity;
// v11 = .float
const v12 = [v11];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = {constructor:-4294967295,length:1337,__proto__:v12};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v16 = v12.includes(v14,1);
// v16 = .boolean
const v17 = v14.toLocaleString(v16,v2);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
