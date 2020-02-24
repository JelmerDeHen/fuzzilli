function main() {
const v2 = {valueOf:eval};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf"])
const v6 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
v6[128] = 13.37;
const v7 = new Uint8Array(v6);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["byteOffset", "length", "constructor", "byteLength", "buffer", "__proto__"], withMethods: ["findIndex", "set", "reduce", "reduceRight", "indexOf", "keys", "subarray", "values", "sort", "lastIndexOf", "forEach", "map", "copyWithin", "entries", "find", "reverse", "includes", "some", "join", "fill", "slice", "filter", "every"])
let v10 = 0;
let v13 = 0;
for (const v14 in v7) {
    const v15 = typeof 512;
    // v15 = .string
    const v17 = v15 === "number";
    // v17 = .boolean
    let v18 = v2;
    for (let v22 = 0; v22 < 100; v22++) {
        const v23 = eval(v14);
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
    }
}
const v24 = v13 + 1;
// v24 = .primitive
v13 = v24;
}
%NeverOptimizeFunction(main);
main();
