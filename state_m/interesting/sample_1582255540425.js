function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v8 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v14 = {a:1337,toString:13.37,c:v4,__proto__:v13,valueOf:"a",constructor:v4};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "valueOf", "toString", "a", "constructor"])
const v15 = {toString:v4,valueOf:v14,d:1337,constructor:-9007199254740992};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "constructor", "valueOf", "toString"])
const v16 = RegExp.apply(v15,RegExp);
// v16 = .unknown
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();
