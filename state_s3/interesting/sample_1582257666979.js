function main() {
const v2 = [1337,Promise];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v3 = v2;
const v5 = {set:Promise,get:Promise};
// v5 = .object(ofGroup: Object, withProperties: ["get", "__proto__", "set"])
const v7 = Object.defineProperty(v3,-256,v5);
// v7 = .undefined
delete v3[0];
}
%NeverOptimizeFunction(main);
main();
