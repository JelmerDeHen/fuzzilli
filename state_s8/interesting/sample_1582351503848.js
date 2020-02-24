function main() {
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v2(v3,v4) {
    const v8 = new Float64Array(1337);
    // v8 = .object(ofGroup: Float64Array, withProperties: ["constructor", "byteOffset", "buffer", "__proto__", "length", "byteLength"], withMethods: ["fill", "sort", "reduceRight", "values", "every", "includes", "lastIndexOf", "findIndex", "copyWithin", "reverse", "keys", "entries", "some", "filter", "forEach", "set", "find", "subarray", "indexOf", "map", "reduce", "slice", "join"])
    v8.constructor = Uint8ClampedArray;
    const v11 = v8.slice(-1,1337);
    // v11 = .object(ofGroup: Float64Array, withProperties: ["byteLength", "constructor", "length", "__proto__", "buffer", "byteOffset"], withMethods: ["reduceRight", "findIndex", "indexOf", "copyWithin", "reduce", "every", "lastIndexOf", "forEach", "entries", "filter", "set", "includes", "find", "reverse", "fill", "sort", "some", "subarray", "keys", "join", "map", "slice", "values"])
}
const v12 = v1.sort(v2);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
