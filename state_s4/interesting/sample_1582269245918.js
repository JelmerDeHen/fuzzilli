function main() {
function v0(v1,v2) {
    let v6 = 0;
    const v9 = new Uint8ClampedArray(56474);
    // v9 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "constructor", "byteLength", "length", "__proto__", "byteOffset"], withMethods: ["forEach", "map", "lastIndexOf", "every", "slice", "values", "subarray", "join", "fill", "filter", "copyWithin", "sort", "some", "reduceRight", "entries", "set", "findIndex", "reverse", "reduce", "find", "includes", "indexOf", "keys"])
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
// v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v28 = v27;
const v29 = v0(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
