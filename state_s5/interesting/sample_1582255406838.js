function main() {
let v2 = 0;
do {
    let v5 = 0;
    do {
        const v6 = v5 + 1;
        // v6 = .primitive
        v5 = v6;
    } while (v5 < 7);
    const v7 = v2 + 1;
    // v7 = .primitive
    v2 = v7;
} while (v2 < 8);
const v10 = new Uint8ClampedArray(52889);
// v10 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
const v12 = v10[2479833249];
// v12 = .unknown
}
%NeverOptimizeFunction(main);
main();
