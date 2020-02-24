function main() {
const v4 = ["c",1337,3488870410];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {constructor:Uint32Array,c:v4};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v8 = v7;
let v10 = undefined;
let v13 = 0;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
const v24 = new Uint32Array(38673);
// v24 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["findIndex", "keys", "join", "sort", "slice", "indexOf", "reverse", "fill", "forEach", "map", "every", "includes", "lastIndexOf", "copyWithin", "entries", "some", "reduce", "values", "set", "find", "subarray", "filter", "reduceRight"])
const v25 = v24.fill(8,0);
// v25 = .undefined
v16 = v17;
const v26 = v13 + 1;
// v26 = .primitive
v13 = v26;
}
%NeverOptimizeFunction(main);
main();
