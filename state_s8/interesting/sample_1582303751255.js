function main() {
let v2 = undefined;
let v5 = 1337;
let v7 = v5;
const v9 = [-3.0,1337,-65535];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = v9.shift();
// v10 = .unknown
const v11 = v9.push(v7);
// v11 = .integer
}
%NeverOptimizeFunction(main);
main();
