function main() {
const v1 = {d:"LG6mUwZTBl"};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v5 = [-939190196];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [v5,v1];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
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
