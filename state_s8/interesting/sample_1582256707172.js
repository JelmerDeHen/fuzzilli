function main() {
let v7 = 0;
let v10 = 0;
let v11 = 0;
let v14 = 0;
const v16 = v14 + 1;
// v16 = .primitive
let v19 = 0;
v11 = v11;
const v23 = v10 + 1;
// v23 = .primitive
v10 = v23;
const v24 = 1337 < 0;
// v24 = .boolean
const v25 = v7 + 1;
// v25 = .primitive
v7 = v25;
const v28 = [13.37,13.37];
// v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v29 = v28[1024];
// v29 = .unknown
let v32 = 0;
const v33 = v29 - 1;
// v33 = .primitive
const v34 = v32 + 1;
// v34 = .primitive
v32 = v34;
const v38 = [1337,1337];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v39 = [v38,v38,v38];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v40 = new WeakSet(v39);
// v40 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["has", "add", "delete"])
const v43 = gc();
// v43 = .undefined
const v44 = gc();
// v44 = .undefined
}
%NeverOptimizeFunction(main);
main();
