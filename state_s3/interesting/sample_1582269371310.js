function main() {
const v2 = {valueOf:eval};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf"])
const v6 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
v6[128] = 13.37;
const v7 = new Uint8Array(v6);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["__proto__", "constructor", "length", "buffer", "byteOffset", "byteLength"], withMethods: ["map", "includes", "every", "reduceRight", "find", "filter", "lastIndexOf", "indexOf", "subarray", "join", "fill", "sort", "slice", "findIndex", "reverse", "forEach", "reduce", "values", "copyWithin", "entries", "keys", "set", "some"])
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
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
    }
}
const v24 = v13 + 1;
// v24 = .primitive
v13 = v24;
}
%NeverOptimizeFunction(main);
main();
