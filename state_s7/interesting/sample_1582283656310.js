function main() {
const v1 = {d:"LG6mUwZTBl"};
// v1 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
const v5 = [-939190196];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [v5,v1];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = {valueOf:v6,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v11 = undefined;
v11 = -1.7976931348623157e+308;
const v13 = v11.toString(3.0,-2147483647,v7,1337);
// v13 = .unknown
const v14 = parseFloat(v13);
// v14 = .float
}
%NeverOptimizeFunction(main);
main();
