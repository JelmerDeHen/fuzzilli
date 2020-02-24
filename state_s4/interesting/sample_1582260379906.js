function main() {
const v1 = {b:1337};
// v1 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v3 = [1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v4 = v3;
let v6 = undefined;
let v8 = 0;
const v12 = [0,0,1337,DataView];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
for (let v16 = 0; v16 < 10; v16 = v16 + v12) {
}
let v19 = 0;
const v26 = v19 + 1;
// v26 = .primitive
v19 = v26;
}
%NeverOptimizeFunction(main);
main();
