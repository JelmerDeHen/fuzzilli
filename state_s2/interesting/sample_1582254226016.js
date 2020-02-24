function main() {
const v2 = [];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v3 = {valueOf:v2,length:13.37,d:127,e:127};
// v3 = .object(ofGroup: Object, withProperties: ["e", "length", "__proto__", "valueOf", "d"])
let v7 = 0;
const v9 = {set:Array,get:Array};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
const v11 = Object.defineProperty(v3,"e",v9);
// v11 = .undefined
const v12 = v7 + 1;
// v12 = .primitive
v7 = v12;
}
%NeverOptimizeFunction(main);
main();
