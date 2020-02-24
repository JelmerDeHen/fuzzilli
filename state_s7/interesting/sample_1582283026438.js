function main() {
try {
    const v2 = new Uint32Array(907);
    // v2 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
    const v4 = {get:v2};
    // v4 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v6 = Object.freeze(v2,10000,v4);
    // v6 = .undefined
} catch(v7) {
}
}
%NeverOptimizeFunction(main);
main();
