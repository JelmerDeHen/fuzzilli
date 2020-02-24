function main() {
try {
    const v4 = new Uint8ClampedArray(29213);
    // v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
    const v5 = v4.__proto__;
    // v5 = .object()
    const v6 = v5.fill(13.37,Uint8ClampedArray,"symbol",29213,v4);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
