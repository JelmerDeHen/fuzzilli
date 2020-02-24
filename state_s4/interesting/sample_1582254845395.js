function main() {
Array[13.37] = 127;
const v7 = Array(127);
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v15 = Symbol.toPrimitive;
// v15 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Array[v15] = v7;
for (const v24 in Array) {
}
const v27 = [13.37,13.37,13.37,13.37,13.37];
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v29 = [1337,v27,13.37,1024];
// v29 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
