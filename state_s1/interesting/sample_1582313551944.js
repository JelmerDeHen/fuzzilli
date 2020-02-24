function main() {
let v7 = 1;
const v10 = new Uint32Array(637);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
const v21 = v10.join(v7);
// v21 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
const v25 = eval(v21);
// v25 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
}
%NeverOptimizeFunction(main);
main();
