function main() {
function v0(v1,v2) {
    const v5 = new Uint8ClampedArray(56474);
    // v5 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
    const v7 = {get:v0,valueOf:v2};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"], withMethods: ["get"])
    const v9 = Reflect.defineProperty(v5,-2147483648,v7);
    // v9 = .boolean
}
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v12 = v11;
const v13 = v0(v12);
// v13 = .unknown
}
%NeverOptimizeFunction(main);
main();
