function main() {
function v0(v1,v2) {
    const v5 = new Uint8ClampedArray(56474);
    // v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
    const v7 = {get:v0,valueOf:v2};
    // v7 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["get"])
    const v9 = Reflect.defineProperty(v5,-2147483648,v7);
    // v9 = .boolean
}
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v12 = v11;
const v13 = v0(v12);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
