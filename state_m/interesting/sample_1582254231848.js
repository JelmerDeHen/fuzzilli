function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v3 = {valueOf:v2,length:13.37,d:127,e:127};
// v3 = .object(ofGroup: Object, withProperties: ["length", "valueOf", "d", "e", "__proto__"])
let v7 = 0;
const v9 = {set:Array,get:Array};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v11 = Object.defineProperty(v3,"e",v9);
// v11 = .undefined
const v12 = v7 + 1;
// v12 = .primitive
v7 = v12;
}
%NeverOptimizeFunction(main);
main();
