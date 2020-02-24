function main() {
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
v4["unscopable"] = Set;
const v7 = "symbol".endsWith("symbol",9007199254740993);
// v7 = .boolean
const v10 = {set:Boolean};
// v10 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v12 = Object.defineProperty(v4,3582212648,v10);
// v12 = .undefined
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
let v24 = 0;
delete v4["unscopable"];
}
%NeverOptimizeFunction(main);
main();
