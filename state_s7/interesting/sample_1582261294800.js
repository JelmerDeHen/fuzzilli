function main() {
const v5 = new Int16Array(19873);
// v5 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v10 = {b:13.37,d:1607264097,e:1607264097,constructor:v9,valueOf:WeakSet};
// v10 = .object(ofGroup: Object, withProperties: ["constructor", "valueOf", "d", "__proto__", "b", "e"])
const v12 = "undefined".padStart(1337,"string");
// v12 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v17 = [1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v18 = {b:13.37,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
// v18 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "b", "constructor", "d"])
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
