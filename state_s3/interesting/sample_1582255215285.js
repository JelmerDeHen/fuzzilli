function main() {
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v9 = "species";
let v12 = v9;
let v15 = 0;
let v18 = 0;
let v56 = 0;
const v57 = v56 + 1;
// v57 = .primitive
v56 = v57;
const v82 = [13.37,13.37];
// v82 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v84 = "object".constructor;
// v84 = .function()
const v95 = v84 << 1337;
// v95 = .integer
let v98 = 0;
const v99 = v98 + 1;
// v99 = .primitive
v98 = v99;
}
%NeverOptimizeFunction(main);
main();
