function main() {
const v3 = [1337,1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = {e:2676202182,valueOf:v3,b:2676202182,a:Float32Array};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e", "a", "valueOf"])
let v5 = v4;
const v7 = [1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v8 = v7;
let v10 = undefined;
let v14 = 0;
delete v5.e;
for (const v15 in v4) {
}
const v16 = v14 + 1;
// v16 = .primitive
v14 = v16;
}
%NeverOptimizeFunction(main);
main();
