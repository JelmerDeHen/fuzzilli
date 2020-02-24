function main() {
try {
    const v2 = new Uint32Array(907);
    // v2 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
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
