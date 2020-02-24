function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = new Uint8ClampedArray(56474);
    // v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
    try {
        const v11 = {get:v0,set:v2};
        // v11 = .object(ofGroup: Object, withProperties: ["set", "__proto__"], withMethods: ["get"])
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
// v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
