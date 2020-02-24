function main() {
const v4 = ["c",1337,3488870410];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {constructor:Uint32Array,c:v4};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v8 = v7;
let v10 = undefined;
let v13 = 0;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
const v24 = new Uint32Array(38673);
// v24 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
const v25 = v24.fill(8,0);
// v25 = .undefined
v16 = v17;
const v26 = v13 + 1;
// v26 = .primitive
v13 = v26;
}
%NeverOptimizeFunction(main);
main();
