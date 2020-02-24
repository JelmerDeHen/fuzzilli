function main() {
try {
    const v3 = new Uint32Array(907);
    // v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "byteLength", "constructor", "byteOffset", "__proto__"], withMethods: ["some", "copyWithin", "reduce", "lastIndexOf", "forEach", "indexOf", "findIndex", "fill", "slice", "every", "set", "join", "values", "filter", "reverse", "subarray", "sort", "reduceRight", "includes", "keys", "map", "find", "entries"])
    const v5 = {get:undefined};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__", "get"])
    const v7 = Object.defineProperty(v3,4294967295,v5);
    // v7 = .undefined
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
