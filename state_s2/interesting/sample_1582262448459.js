function main() {
let v1 = 13.37;
let v2 = v1;
let v7 = 0;
const v10 = new Int16Array(19873);
// v10 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
const v11 = -Infinity;
// v11 = .float
const v12 = [v11];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v14 = {constructor:-4294967295,length:1337,__proto__:v12};
// v14 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v16 = v12.includes(v14,1);
// v16 = .boolean
const v17 = v14.toLocaleString(v16,v2);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
