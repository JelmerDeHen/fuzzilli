function main() {
const v1 = {b:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v4 = v3;
let v6 = undefined;
let v8 = 0;
const v12 = [0,0,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
for (let v16 = 0; v16 < 10; v16 = v16 + v12) {
}
let v19 = 0;
const v26 = v19 + 1;
// v26 = .primitive
v19 = v26;
}
%NeverOptimizeFunction(main);
main();
