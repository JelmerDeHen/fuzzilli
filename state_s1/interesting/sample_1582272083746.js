function main() {
try {
    const v3 = new Uint32Array(907);
    // v3 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
    const v4 = {d:v3};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
    const v6 = Object.defineProperty(v3,13.37,v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
