function main() {
const v5 = new Int16Array(19873);
// v5 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v10 = {b:13.37,d:1607264097,e:1607264097,constructor:v9,valueOf:WeakSet};
// v10 = .object(ofGroup: Object, withProperties: ["e", "d", "constructor", "b", "__proto__", "valueOf"])
const v12 = "undefined".padStart(1337,"string");
// v12 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v18 = {b:13.37,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
// v18 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "valueOf", "d", "constructor", "b"])
let v21 = 0;
const v22 = v21 + 1;
// v22 = .primitive
v21 = v22;
let v29 = 0;
const v31 = v12.endsWith(v12);
// v31 = .boolean
}
%NeverOptimizeFunction(main);
main();
