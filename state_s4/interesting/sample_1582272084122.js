function main() {
try {
    const v3 = new Uint32Array(907);
    // v3 = .object(ofGroup: Uint32Array, withProperties: ["byteOffset", "byteLength", "buffer", "constructor", "__proto__", "length"], withMethods: ["lastIndexOf", "slice", "keys", "map", "sort", "indexOf", "set", "join", "forEach", "reverse", "filter", "fill", "reduce", "every", "values", "copyWithin", "entries", "some", "subarray", "find", "findIndex", "includes", "reduceRight"])
    const v4 = {d:v3};
    // v4 = .object(ofGroup: Object, withProperties: ["d", "__proto__"])
    const v6 = Object.defineProperty(v3,13.37,v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
