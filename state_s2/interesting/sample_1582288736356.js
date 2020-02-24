function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
try {
    const v6 = "symbol".replace("symbol","symbol");
    // v6 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
    const v8 = new Uint16Array(v6);
    // v8 = .object(ofGroup: Uint16Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "byteOffset", "length"], withMethods: ["indexOf", "set", "map", "reduce", "join", "values", "subarray", "find", "copyWithin", "sort", "filter", "lastIndexOf", "reduceRight", "includes", "some", "every", "forEach", "findIndex", "reverse", "slice", "fill", "keys", "entries"])
    const v10 = v8.set(13.37,1411100319);
    // v10 = .undefined
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();
