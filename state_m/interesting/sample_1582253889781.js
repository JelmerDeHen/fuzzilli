function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = {d:gc,valueOf:v3};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["d"])
const v10 = {c:13.37};
// v10 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
const v15 = [13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v17 = [13.37,v15];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v18 = 1337;
const v21 = [13.37,13.37];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
for (const v23 in "object") {
}
const v24 = {c:13.37};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v25 = 1337;
const v27 = Object();
// v27 = .object()
let v28 = 1337;
const v30 = Object();
// v30 = .object()
v21[13.37] = 13.37;
v28 = 1337;
let v31 = v24;
const v32 = new Object(1337);
// v32 = .object()
v17[0] = 0;
const v33 = gc();
// v33 = .undefined
}
%NeverOptimizeFunction(main);
main();
