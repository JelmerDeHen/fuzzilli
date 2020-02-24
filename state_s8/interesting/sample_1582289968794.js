function main() {
const v1 = Boolean[4096];
// v1 = .unknown
const v4 = [-939190196];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [v4,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = {valueOf:v6,__proto__:v6};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v11 = undefined;
v11 = Infinity;
const v13 = v11.toString(3.0,-2147483647,v7,1337);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
