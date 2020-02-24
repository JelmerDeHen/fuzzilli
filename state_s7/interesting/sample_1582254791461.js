function main() {
Array[13.37] = 127;
const v7 = Array(127);
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v15 = Symbol.toPrimitive;
// v15 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
Array[v15] = v7;
for (const v24 in Array) {
}
const v27 = [13.37,13.37,13.37,13.37,13.37];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v29 = [1337,v27,13.37,1024];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v30 = v29 <= v27;
// v30 = .boolean
let v33 = 0;
const v34 = v33 + 1;
// v34 = .primitive
v33 = v34;
let v40 = 0;
const v41 = v40 + 1;
// v41 = .primitive
v40 = v41;
}
%NeverOptimizeFunction(main);
main();
