function main() {
const v3 = [13.37,13.37,-4294967297,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {length:v3,constructor:Uint8Array};
// v4 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
delete v4.constructor;
let v7 = 0;
let v10 = 0;
const v11 = v10 + 1;
// v11 = .primitive
v10 = v11;
const v12 = v7 + 1;
// v12 = .primitive
v7 = v12;
}
%NeverOptimizeFunction(main);
main();
