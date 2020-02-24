function main() {
const v5 = new Int16Array(19873);
// v5 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v10 = {b:13.37,d:1607264097,e:1607264097,constructor:v9,valueOf:WeakSet};
// v10 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "__proto__", "d", "constructor", "e"])
const v12 = "undefined".padStart(1337,"string");
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v18 = {b:13.37,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
// v18 = .object(ofGroup: Object, withProperties: ["constructor", "d", "e", "__proto__", "valueOf", "b"])
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
