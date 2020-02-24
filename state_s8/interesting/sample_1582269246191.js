function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = new Uint8ClampedArray(56474);
    // v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteOffset", "__proto__", "buffer", "length", "byteLength", "constructor"], withMethods: ["every", "reduce", "indexOf", "reverse", "map", "join", "entries", "reduceRight", "subarray", "includes", "sort", "some", "values", "copyWithin", "filter", "lastIndexOf", "set", "fill", "find", "findIndex", "keys", "forEach", "slice"])
    try {
        const v11 = {get:v0,set:v2};
        // v11 = .object(ofGroup: Object, withProperties: ["__proto__", "set"], withMethods: ["get"])
        const v13 = Object.defineProperty(v9,-2147483648,v11);
        // v13 = .undefined
        let v16 = 0;
        let v19 = 0;
        let v23 = 0;
    } catch(v24) {
    }
    const v25 = v6 + 1;
    // v25 = .primitive
    v6 = v25;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
