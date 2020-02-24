function main() {
try {
    const v2 = new Int8Array(536870912);
    // v2 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
    const v6 = Reflect.construct(WeakSet,v2,Uint32Array);
    // v6 = .unknown
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
