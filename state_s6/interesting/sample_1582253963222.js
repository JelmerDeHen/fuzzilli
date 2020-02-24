function main() {
const v2 = new Uint16Array("iterator");
// v2 = .object(ofGroup: Uint16Array, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset", "constructor", "length"], withMethods: ["set", "filter", "some", "sort", "reduce", "lastIndexOf", "fill", "indexOf", "slice", "keys", "reverse", "every", "includes", "values", "entries", "findIndex", "subarray", "reduceRight", "map", "copyWithin", "find", "join", "forEach"])
let v5 = 0;
while (v5 < 9) {
    let v8 = 0;
    do {
        v2[1] = 0;
        const v9 = v8 + 1;
        // v9 = .primitive
        v8 = v9;
    } while (v8 < 10);
    const v10 = v5 + 1;
    // v10 = .primitive
    v5 = v10;
}
}
%NeverOptimizeFunction(main);
main();
