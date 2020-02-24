function main() {
const v1 = {b:1337};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v4 = v3;
let v6 = undefined;
let v8 = 0;
const v12 = [0,0,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
for (let v16 = 0; v16 < 10; v16 = v16 + v12) {
}
let v19 = 0;
const v26 = v19 + 1;
// v26 = .primitive
v19 = v26;
}
%NeverOptimizeFunction(main);
main();
