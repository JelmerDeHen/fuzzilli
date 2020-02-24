function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = new Uint8ClampedArray(56474);
    // v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
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
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
