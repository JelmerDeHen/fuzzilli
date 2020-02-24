function main() {
const v4 = Array(127);
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = {c:13.37};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__", "c"])
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
let v13 = 0;
const v17 = v13 + 1;
// v17 = .primitive
v13 = v17;
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
const v24 = {get:Symbol,set:Array};
// v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v26 = Object.defineProperty(v6,"c",v24);
// v26 = .undefined
}
%NeverOptimizeFunction(main);
main();
