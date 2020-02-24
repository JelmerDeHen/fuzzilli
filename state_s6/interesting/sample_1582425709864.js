function main() {
try {
    const v4 = new Uint8ClampedArray(29213);
    // v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "byteLength", "constructor", "byteOffset", "length", "buffer"], withMethods: ["filter", "forEach", "lastIndexOf", "find", "subarray", "reduce", "indexOf", "join", "entries", "copyWithin", "sort", "slice", "some", "fill", "reverse", "includes", "reduceRight", "values", "keys", "map", "every", "findIndex", "set"])
    const v5 = v4.__proto__;
    // v5 = .object()
    const v6 = v5.fill(13.37,Uint8ClampedArray,"symbol",29213,v4);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
