function main() {
const v3 = [13.37,-828296917];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = {__proto__:v3,length:1337,constructor:2815038421,valueOf:v3,a:"string"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "constructor", "a", "valueOf"])
const v9 = {get:Array};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v11 = Object.defineProperty(v7,"a",v9);
// v11 = .undefined
let v15 = 13.37;
Array[2815038421] = 0;
const v20 = {get:Array};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get"])
const v22 = Object.defineProperty(Array,512,v20);
// v22 = .undefined
}
%NeverOptimizeFunction(main);
main();
