function main() {
try {
    const v3 = new Uint32Array(907);
    // v3 = .object(ofGroup: Uint32Array, withProperties: ["buffer", "length", "__proto__", "byteLength", "byteOffset", "constructor"], withMethods: ["includes", "forEach", "every", "some", "subarray", "lastIndexOf", "values", "copyWithin", "findIndex", "reverse", "sort", "keys", "filter", "join", "indexOf", "reduce", "reduceRight", "set", "slice", "find", "fill", "map", "entries"])
    const v5 = {get:undefined};
    // v5 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v7 = Object.defineProperty(v3,4294967295,v5);
    // v7 = .undefined
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
