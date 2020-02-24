function main() {
try {
    const v4 = new Uint8ClampedArray(29213);
    // v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
    const v5 = v4.__proto__;
    // v5 = .object()
    const v6 = v5.lastIndexOf(13.37,Uint8ClampedArray,"symbol",29213,v4);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
