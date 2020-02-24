function main() {
const v5 = ["c",1337,3488870410];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = {__proto__:3488870410,length:"c",e:13.37,c:v5,d:Uint32Array};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e", "length", "c"])
let v8 = 0;
const v9 = v8[3];
// v9 = .unknown
let v13 = 13.37;
const v15 = new Int32Array(v6);
// v15 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["filter", "map", "reverse", "slice", "some", "join", "forEach", "fill", "every", "sort", "find", "set", "includes", "entries", "subarray", "indexOf", "reduceRight", "lastIndexOf", "reduce", "values", "keys", "copyWithin", "findIndex"])
const v16 = v15.sort(v9);
// v16 = .undefined
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();
