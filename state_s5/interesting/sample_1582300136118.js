function main() {
let v2 = undefined;
let v5 = 256;
let v7 = v5;
const v9 = [-3.0,1337,-65535];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v10 = v9.shift();
// v10 = .unknown
const v11 = v9.push(v7);
// v11 = .integer
}
%NeverOptimizeFunction(main);
main();
