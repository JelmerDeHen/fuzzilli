function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v15 = [13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v17 = [v15,471091797,DataView];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v18 = {c:1337};
// v18 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v19 = {constructor:v15,toString:v18,__proto__:471091797,length:v17};
// v19 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "toString", "length"])
const v21 = typeof v19;
// v21 = .string
const v23 = v21 === "object";
// v23 = .boolean
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
const v38 = {};
// v38 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v42 = Object.getOwnPropertySymbols(v38);
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
%NeverOptimizeFunction(main);
main();
