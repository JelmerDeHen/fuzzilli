function main() {
const v1 = [13.37,13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v2 = v1;
const v5 = "object".constructor;
// v5 = .function()
const v7 = {constructor:gc};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor"])
const v9 = Object.defineProperty(v2,"toString",v7);
// v9 = .undefined
const v11 = [13.37,13.37,13.37,13.37,13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v12 = v11;
v12.toString = v5;
}
%NeverOptimizeFunction(main);
main();
