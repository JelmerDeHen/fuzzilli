function main() {
function v1(v2,v3) {
    let v7 = 0;
    const v9 = v7 + 1;
    // v9 = .primitive
    v7 = v9;
    const v12 = new Uint8Array(47774);
    // v12 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteLength", "buffer", "__proto__", "byteOffset", "constructor"], withMethods: ["fill", "slice", "findIndex", "reverse", "indexOf", "filter", "map", "copyWithin", "set", "find", "keys", "forEach", "subarray", "every", "reduce", "entries", "join", "lastIndexOf", "values", "sort", "some", "reduceRight", "includes"])
    for (const v13 in v12) {
    }
    const v15 = typeof "N0Xx92zvHQ";
    // v15 = .string
    const v17 = v15 === "string";
    // v17 = .boolean
    let v21 = 0;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v28 = v27;
const v29 = v1(v28);
// v29 = .unknown
const v30 = v1(1024,4.0);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
