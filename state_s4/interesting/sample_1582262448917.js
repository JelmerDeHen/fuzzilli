function main() {
let v1 = 13.37;
let v2 = v1;
let v7 = 0;
const v10 = new Int16Array(19873);
// v10 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
const v11 = -Infinity;
// v11 = .float
const v12 = [v11];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v14 = {constructor:-4294967295,length:1337,__proto__:v12};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"])
const v16 = v12.includes(v14,1);
// v16 = .boolean
const v17 = v14.toLocaleString(v16,v2);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
