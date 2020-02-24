function main() {
let v1 = 13.37;
let v2 = v1;
let v7 = 0;
const v10 = new Int16Array(19873);
// v10 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
const v11 = -Infinity;
// v11 = .float
const v12 = [v11];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v14 = {constructor:-4294967295,length:1337,__proto__:v12};
// v14 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
const v16 = v12.includes(v14,1);
// v16 = .boolean
const v17 = v14.toLocaleString(v16,v2);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
