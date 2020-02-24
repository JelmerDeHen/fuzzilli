function main() {
try {
    const v2 = new Uint32Array(907);
    // v2 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "byteOffset", "__proto__", "constructor", "byteLength", "length"], withMethods: ["entries", "keys", "map", "every", "set", "reduce", "includes", "reduceRight", "lastIndexOf", "some", "findIndex", "find", "subarray", "filter", "join", "values", "reverse", "copyWithin", "indexOf", "forEach", "sort", "fill", "slice"])
    const v4 = {get:v2};
    // v4 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    let v8 = 0;
    let v11 = 0;
    const v13 = Object.defineProperty(v2,10000,v4);
    // v13 = .undefined
} catch(v14) {
}
}
%NeverOptimizeFunction(main);
main();
