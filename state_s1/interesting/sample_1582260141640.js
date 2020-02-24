function main() {
function v1(v2,v3) {
    let v7 = 0;
    const v9 = v7 + 1;
    // v9 = .primitive
    v7 = v9;
    const v12 = new Uint8Array(47774);
    // v12 = .object(ofGroup: Uint8Array, withProperties: ["byteLength", "__proto__", "byteOffset", "length", "buffer", "constructor"], withMethods: ["reverse", "copyWithin", "forEach", "filter", "some", "indexOf", "lastIndexOf", "slice", "values", "every", "fill", "subarray", "findIndex", "keys", "reduceRight", "includes", "map", "reduce", "join", "sort", "set", "find", "entries"])
    for (const v13 in v12) {
    }
    const v15 = typeof "N0Xx92zvHQ";
    // v15 = .string
    const v17 = v15 === "string";
    // v17 = .boolean
    let v21 = 0;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v28 = v27;
const v29 = v1(v28);
// v29 = .unknown
const v30 = v1(1024,4.0);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
