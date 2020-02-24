function main() {
try {
    const v4 = new Uint8ClampedArray(29213);
    // v4 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
    const v5 = v4.__proto__;
    // v5 = .object()
    const v6 = v5.lastIndexOf(13.37,Uint8ClampedArray,"symbol",29213,v4);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
