function main() {
const v3 = [-939190196];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = [v3,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
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
