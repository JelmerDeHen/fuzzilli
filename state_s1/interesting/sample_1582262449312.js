function main() {
let v1 = 13.37;
let v2 = v1;
let v7 = 0;
const v10 = new Int16Array(19873);
// v10 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["lastIndexOf", "reduceRight", "every", "reduce", "copyWithin", "findIndex", "reverse", "sort", "map", "some", "join", "find", "filter", "subarray", "values", "indexOf", "keys", "fill", "includes", "slice", "set", "forEach", "entries"])
const v11 = -Infinity;
// v11 = .float
const v12 = [v11];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v14 = {constructor:-4294967295,length:1337,__proto__:v12};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor"])
const v16 = v12.includes(v14,1);
// v16 = .boolean
const v17 = v14.toLocaleString(v16,v2);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
