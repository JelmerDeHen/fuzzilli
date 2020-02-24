function main() {
const v5 = new Int16Array(19873);
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v10 = {b:13.37,d:1607264097,e:1607264097,constructor:v9,valueOf:WeakSet};
// v10 = .object(ofGroup: Object, withProperties: ["d", "constructor", "__proto__", "valueOf", "e", "b"])
const v12 = "undefined".padStart(1337,"string");
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v18 = {b:13.37,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
// v18 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "constructor", "b", "d"])
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
