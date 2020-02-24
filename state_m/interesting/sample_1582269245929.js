function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = new Uint8ClampedArray(56474);
    // v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["constructor", "byteLength", "__proto__", "buffer", "length", "byteOffset"], withMethods: ["slice", "reduceRight", "findIndex", "every", "copyWithin", "set", "fill", "sort", "forEach", "entries", "join", "values", "keys", "map", "reverse", "indexOf", "subarray", "reduce", "find", "includes", "lastIndexOf", "filter", "some"])
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
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
