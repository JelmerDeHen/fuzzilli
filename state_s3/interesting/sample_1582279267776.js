function main() {
let v3 = 0;
let v6 = 0;
function v7(v8,v9) {
    const v12 = new Uint8ClampedArray(56474);
    // v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
    const v14 = {get:v7,valueOf:v9};
    // v14 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"], withMethods: ["get"])
    const v16 = Reflect.defineProperty(v12,2990149688,v14);
    // v16 = .boolean
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v19 = v18;
const v20 = v7(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
