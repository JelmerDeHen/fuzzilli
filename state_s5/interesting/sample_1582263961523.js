function main() {
const v4 = ["c",1337,3488870410];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {constructor:Uint32Array,c:v4};
// v5 = .object(ofGroup: Object, withProperties: ["constructor", "c", "__proto__"])
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v8 = v7;
let v10 = undefined;
let v13 = 0;
let v16 = 0;
const v17 = v16 + 1;
// v17 = .primitive
const v24 = new Uint32Array(38673);
// v24 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
const v25 = v24.fill(8,0);
// v25 = .undefined
v16 = v17;
const v26 = v13 + 1;
// v26 = .primitive
v13 = v26;
}
%NeverOptimizeFunction(main);
main();
