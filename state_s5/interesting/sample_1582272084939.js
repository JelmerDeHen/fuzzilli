function main() {
try {
    const v3 = new Uint32Array(907);
    // v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
    const v4 = {d:v3};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
    const v6 = Object.defineProperty(v3,13.37,v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
