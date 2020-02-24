function main() {
const v1 = {d:"LG6mUwZTBl"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v5 = [-939190196];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [v5,v1];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {valueOf:v6,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v11 = undefined;
v11 = -1.7976931348623157e+308;
const v13 = v11.toString(3.0,-2147483647,v7,1337);
// v13 = .unknown
const v14 = parseFloat(v13);
// v14 = .float
}
%NeverOptimizeFunction(main);
main();
