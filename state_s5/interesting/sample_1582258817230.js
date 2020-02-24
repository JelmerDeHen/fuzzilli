function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "e", "a", "__proto__"])
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
