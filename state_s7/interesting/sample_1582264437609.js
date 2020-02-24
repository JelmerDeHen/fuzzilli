function main() {
try {
    const v2 = new Uint32Array(907);
    // v2 = .object(ofGroup: Uint32Array, withProperties: ["length", "buffer", "byteOffset", "byteLength", "__proto__", "constructor"], withMethods: ["includes", "reduceRight", "slice", "indexOf", "every", "reduce", "reverse", "map", "some", "sort", "values", "fill", "copyWithin", "subarray", "join", "find", "forEach", "lastIndexOf", "entries", "filter", "set", "keys", "findIndex"])
    const v4 = {get:v2};
    // v4 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    let v8 = 0;
    let v11 = 0;
    const v13 = Object.defineProperty(v2,10000,v4);
    // v13 = .undefined
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
