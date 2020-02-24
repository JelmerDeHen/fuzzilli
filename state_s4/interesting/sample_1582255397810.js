function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v3 = {toString:"species",valueOf:v2,__proto__:"species"};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "valueOf", "__proto__"])
let v4 = v3;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
Array[2] = "string";
for (const v12 in Array) {
}
}
%NeverOptimizeFunction(main);
main();
