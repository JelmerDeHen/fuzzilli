function main() {
const v2 = {valueOf:eval};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["valueOf"])
const v6 = [-4294967296,-4294967296,-4294967296,-4294967296,-4294967296];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
v6[128] = 13.37;
const v7 = new Uint8Array(v6);
// v7 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "constructor", "buffer", "length", "byteOffset"], withMethods: ["indexOf", "every", "some", "includes", "reduce", "sort", "find", "keys", "subarray", "slice", "reduceRight", "fill", "copyWithin", "findIndex", "join", "forEach", "filter", "entries", "map", "set", "lastIndexOf", "values", "reverse"])
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
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["padEnd", "substring", "charAt", "split", "includes", "padStart", "trim", "charCodeAt", "startsWith", "lastIndexOf", "replace", "repeat", "concat", "slice", "indexOf", "endsWith", "codePointAt"])
    }
}
const v24 = v13 + 1;
// v24 = .primitive
v13 = v24;
}
%NeverOptimizeFunction(main);
main();
