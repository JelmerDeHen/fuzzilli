function main() {
let v2 = undefined;
let v4 = -65535;
let v6 = v4;
const v8 = [-3.0,1337,-65535];
// v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v9 = v8.shift();
// v9 = .unknown
const v10 = v8.push(v6);
// v10 = .integer
}
%NeverOptimizeFunction(main);
main();
