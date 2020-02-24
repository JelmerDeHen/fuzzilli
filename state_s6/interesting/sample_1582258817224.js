function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "a", "valueOf", "b"])
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
