function main() {
const v5 = ["c",1337,3488870410];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {__proto__:3488870410,length:"c",e:13.37,c:v5,d:Uint32Array};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d", "c", "length"])
let v8 = 0;
const v9 = v8[3];
// v9 = .unknown
let v13 = 13.37;
const v15 = new Int32Array(v6);
// v15 = .object(ofGroup: Int32Array, withProperties: ["__proto__", "constructor", "length", "byteOffset", "byteLength", "buffer"], withMethods: ["sort", "forEach", "filter", "fill", "lastIndexOf", "reduce", "map", "reduceRight", "find", "keys", "every", "set", "join", "values", "subarray", "copyWithin", "slice", "indexOf", "reverse", "entries", "findIndex", "some", "includes"])
const v16 = v15.sort(v9);
// v16 = .undefined
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();
