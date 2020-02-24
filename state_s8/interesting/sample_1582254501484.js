function main() {
const v2 = [13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v3 = v2[1024];
// v3 = .unknown
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v10 = [13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v17 = 0;
let v20 = 0;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
let v30 = 0;
const v34 = v20 + 1;
// v34 = .primitive
v20 = v34;
const v35 = v17 + 1;
// v35 = .primitive
v17 = v35;
let v39 = 0;
const v40 = v39 + 1;
// v40 = .primitive
v39 = v40;
const v43 = {get:v3};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
const v45 = Object.defineProperty(v10,"constructor",v43);
// v45 = .undefined
}
%NeverOptimizeFunction(main);
main();
