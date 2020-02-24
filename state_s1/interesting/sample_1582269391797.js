function main() {
const v2 = {valueOf:eval};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf"])
const v6 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
v6[128] = 13.37;
const v7 = new Uint8Array(v6);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
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
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
    }
}
const v24 = v13 + 1;
// v24 = .primitive
v13 = v24;
}
%NeverOptimizeFunction(main);
main();
