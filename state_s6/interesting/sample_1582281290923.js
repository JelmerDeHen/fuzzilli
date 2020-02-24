function main() {
const v3 = [-939190196];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = [v3,1337];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = {valueOf:v5,__proto__:v5};
// v6 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v10 = undefined;
v10 = 2.2250738585072014e-308;
const v12 = v10.toString(3.0,-2147483647,v6,1337);
// v12 = .unknown
const v13 = parseFloat(v12);
// v13 = .float
}
%NeverOptimizeFunction(main);
main();
