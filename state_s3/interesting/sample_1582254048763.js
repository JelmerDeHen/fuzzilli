function main() {
const v1 = [];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = {};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v4 = v1 + 1;
// v4 = .primitive
const v5 = Reflect === 9007199254740993;
// v5 = .boolean
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v16 = 0;
for (let v20 = 0; v20 < 100; v20++) {
}
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
const v29 = v6[v4];
// v29 = .unknown
v3[0] = v5;
}
%NeverOptimizeFunction(main);
main();
