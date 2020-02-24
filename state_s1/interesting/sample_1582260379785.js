function main() {
const v1 = {b:1337};
// v1 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v4 = v3;
let v6 = undefined;
let v8 = 0;
const v12 = [0,0,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
for (let v16 = 0; v16 < 10; v16 = v16 + v12) {
}
let v19 = 0;
const v26 = v19 + 1;
// v26 = .primitive
v19 = v26;
}
%NeverOptimizeFunction(main);
main();
