function main() {
const v1 = [-1000.0,-1000.0,-1000.0,-1000.0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v2(v3,v4) {
    const v8 = new Float64Array(1337);
    // v8 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
    v8.constructor = Uint8ClampedArray;
    const v11 = v8.slice(-1,1337);
    // v11 = .object(ofGroup: Float64Array, withProperties: ["length", "constructor", "__proto__", "byteLength", "buffer", "byteOffset"], withMethods: ["slice", "includes", "entries", "keys", "map", "set", "join", "values", "forEach", "every", "reverse", "indexOf", "reduce", "lastIndexOf", "find", "sort", "copyWithin", "findIndex", "filter", "some", "subarray", "reduceRight", "fill"])
}
const v12 = v1.sort(v2);
// v12 = .undefined
}
%NeverOptimizeFunction(main);
main();
