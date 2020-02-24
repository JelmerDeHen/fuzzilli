function main() {
let v2 = 0;
do {
    function v3(v4,v5) {
        const v7 = Math.log1p(Math);
        // v7 = .number
        const v10 = new Uint8Array(19873);
        // v10 = .object(ofGroup: Uint8Array, withProperties: ["buffer", "byteLength", "byteOffset", "length", "__proto__", "constructor"], withMethods: ["copyWithin", "keys", "forEach", "findIndex", "map", "sort", "entries", "subarray", "includes", "set", "reverse", "reduceRight", "join", "values", "fill", "indexOf", "every", "slice", "find", "filter", "some", "reduce", "lastIndexOf"])
        for (const v11 of v10) {
        }
    }
    const v13 = [1337];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    let v14 = v13;
    const v15 = v3(v14);
    // v15 = .unknown
    const v16 = v2 + 1;
    // v16 = .primitive
    v2 = v16;
} while (v2 < 8);
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
let v27 = 0;
const v28 = v27 + 1;
// v28 = .primitive
v27 = v28;
}
%NeverOptimizeFunction(main);
main();
