function main() {
function v1(v2,v3) {
    let v7 = 0;
    const v9 = v7 + 1;
    // v9 = .primitive
    v7 = v9;
    const v12 = new Uint8Array(47774);
    // v12 = .object(ofGroup: Uint8Array, withProperties: ["length", "byteOffset", "buffer", "__proto__", "constructor", "byteLength"], withMethods: ["keys", "findIndex", "filter", "indexOf", "reduceRight", "sort", "map", "some", "subarray", "reduce", "fill", "lastIndexOf", "set", "values", "entries", "reverse", "every", "includes", "join", "slice", "copyWithin", "forEach", "find"])
    for (const v13 in v12) {
    }
    const v15 = typeof "N0Xx92zvHQ";
    // v15 = .string
    const v17 = v15 === "string";
    // v17 = .boolean
    let v21 = 0;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v28 = v27;
const v29 = v1(v28);
// v29 = .unknown
const v30 = v1(1024,4.0);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
