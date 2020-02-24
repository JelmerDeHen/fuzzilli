function main() {
const v1 = {b:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v4 = v3;
let v6 = undefined;
let v8 = 0;
const v12 = [0,0,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
for (let v16 = 0; v16 < 10; v16 = v16 + v12) {
}
let v19 = 0;
const v26 = v19 + 1;
// v26 = .primitive
v19 = v26;
}
%NeverOptimizeFunction(main);
main();
