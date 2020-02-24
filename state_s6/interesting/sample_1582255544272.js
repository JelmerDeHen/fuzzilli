function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v8 = 0;
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
const v13 = [1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = {a:1337,toString:13.37,c:v4,__proto__:v13,valueOf:"a",constructor:v4};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "valueOf", "c", "a", "toString"])
const v15 = {toString:v4,valueOf:v14,d:1337,constructor:-9007199254740992};
// v15 = .object(ofGroup: Object, withProperties: ["constructor", "toString", "valueOf", "d", "__proto__"])
const v16 = RegExp.apply(v15,RegExp);
// v16 = .unknown
let v19 = 0;
}
%NeverOptimizeFunction(main);
main();
