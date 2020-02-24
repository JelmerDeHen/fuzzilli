function main() {
try {
    const v3 = new Uint32Array(907);
    // v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
    const v5 = {get:undefined};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v7 = Object.defineProperty(v3,4294967295,v5);
    // v7 = .undefined
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
