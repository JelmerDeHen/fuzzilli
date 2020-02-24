function main() {
try {
    const v3 = new Uint32Array(907);
    // v3 = .object(ofGroup: Uint32Array, withProperties: ["byteLength", "length", "__proto__", "constructor", "buffer", "byteOffset"], withMethods: ["fill", "sort", "entries", "some", "map", "findIndex", "subarray", "values", "forEach", "filter", "indexOf", "find", "reduce", "keys", "reduceRight", "includes", "copyWithin", "set", "lastIndexOf", "slice", "every", "join", "reverse"])
    const v5 = {get:undefined};
    // v5 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
    const v7 = Object.defineProperty(v3,4294967295,v5);
    // v7 = .undefined
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
