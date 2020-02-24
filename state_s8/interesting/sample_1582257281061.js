function main() {
const v8 = [3156875969,3156875969,1337,DataView];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v9 = {e:DataView,constructor:1337,valueOf:1337,d:v8};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "constructor", "d", "valueOf"])
let v12 = 0;
let v15 = 0;
const v16 = v15 + 1;
// v16 = .primitive
v15 = v16;
const v17 = v12 + 1;
// v17 = .primitive
v12 = v17;
const v18 = Object.freeze(v9);
// v18 = .undefined
}
%NeverOptimizeFunction(main);
main();
