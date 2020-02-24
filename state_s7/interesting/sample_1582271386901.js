function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v3 = v2;
let v5 = undefined;
let v11 = 0;
const v20 = [13.37,13.37,13.37,13.37];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v21 = {toString:v20,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v21 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "valueOf", "d", "c", "constructor", "toString"], withMethods: ["__proto__", "length", "b"])
const v25 = RegExp(1000);
// v25 = .object()
const v26 = Function(v25);
// v26 = .unknown
let v28 = 0;
let v30 = -1155643050;
const v31 = v30 % -1155643050;
// v31 = .number
const v32 = v31 + 1;
// v32 = .primitive
v30 = v32;
const v33 = v28 + 1;
// v33 = .primitive
const v34 = v26(Int8Array);
// v34 = .unknown
v28 = v33;
}
%NeverOptimizeFunction(main);
main();
