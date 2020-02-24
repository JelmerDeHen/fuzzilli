function main() {
try {
    const v2 = new Uint32Array(907);
    // v2 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
    const v4 = {get:v2};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v6 = Object.freeze(v2,10000,v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
