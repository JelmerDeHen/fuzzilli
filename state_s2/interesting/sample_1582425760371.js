function main() {
try {
    const v4 = new Uint8ClampedArray(29213);
    // v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
    const v5 = v4.__proto__;
    // v5 = .object()
    const v6 = v5.fill(13.37,Uint8ClampedArray,"symbol",29213,v4);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
