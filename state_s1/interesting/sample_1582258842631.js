function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["a", "e", "b", "valueOf", "__proto__"])
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
