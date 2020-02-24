function main() {
const v2 = [1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v3 = v2;
let v5 = undefined;
let v11 = 0;
const v20 = [13.37,13.37,13.37,13.37];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v21 = {toString:v20,valueOf:2147483648,constructor:"NEGATIVE_INFINITY",length:RegExp,__proto__:RegExp,b:RegExp,d:13.37,a:2147483648,c:13.37};
// v21 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "constructor", "toString", "c", "valueOf", "a"], withMethods: ["__proto__", "length", "b"])
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
