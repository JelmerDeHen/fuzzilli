function main() {
function v1(v2,v3) {
    let v6 = -128;
    do {
        const v12 = new Uint8ClampedArray(5171);
        // v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["__proto__", "buffer", "length", "constructor", "byteOffset", "byteLength"], withMethods: ["copyWithin", "keys", "entries", "indexOf", "find", "subarray", "values", "sort", "some", "reduce", "filter", "slice", "every", "join", "fill", "map", "set", "reduceRight", "reverse", "forEach", "lastIndexOf", "findIndex", "includes"])
        v12[1337] = -2;
        const v14 = v6 + 1;
        // v14 = .primitive
        v6 = v14;
    } while (v6 < -2);
}
let v15 = 1337;
const v16 = v1(v15);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
