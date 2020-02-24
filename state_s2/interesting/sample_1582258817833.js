function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "e", "b", "valueOf"])
let v5 = v4;
const v6 = {};
// v6 = .object(ofGroup: Object, withProperties: ["__proto__"])
let v7 = v6;
v7[1073741824] = v5;
let v15 = 0;
v7["symbol"] = 1337;
let v26 = 0;
}
%NeverOptimizeFunction(main);
main();
