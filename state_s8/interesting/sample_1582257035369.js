function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v3 = v2;
let v5 = undefined;
const v8 = {set:Array};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v10 = Object.defineProperty(v3,2147483647,v8);
// v10 = .undefined
let v13 = 0;
const v18 = v13 + 1;
// v18 = .primitive
v13 = v18;
}
%NeverOptimizeFunction(main);
main();
