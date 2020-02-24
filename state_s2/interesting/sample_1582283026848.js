function main() {
try {
    const v2 = new Uint32Array(907);
    // v2 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
    const v4 = {get:v2};
    // v4 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v6 = Object.freeze(v2,10000,v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
