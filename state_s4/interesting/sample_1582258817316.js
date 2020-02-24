function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["b", "a", "__proto__", "valueOf", "e"])
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
