function main() {
const v2 = {valueOf:eval};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf"])
const v6 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
v6[128] = 13.37;
const v7 = new Uint8Array(v6);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
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
        // v23 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
    }
}
const v24 = v13 + 1;
// v24 = .primitive
v13 = v24;
}
%NeverOptimizeFunction(main);
main();
