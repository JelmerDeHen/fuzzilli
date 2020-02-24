function main() {
let v7 = 1;
const v10 = new Uint32Array(637);
// v10 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
const v21 = v10.join(v7);
// v21 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
const v25 = eval(v21);
// v25 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
}
%NeverOptimizeFunction(main);
main();
