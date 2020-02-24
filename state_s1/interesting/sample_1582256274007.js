function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
for (const v5 in "object") {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    v8 = v9;
    let v13 = 0;
    for (const v21 in "boolean") {
        let v24 = 0;
        const v31 = v24 + 1;
        // v31 = .primitive
        v24 = v31;
    }
}
const v34 = new Uint8ClampedArray(52889);
// v34 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
const v35 = v34[2479833249];
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
