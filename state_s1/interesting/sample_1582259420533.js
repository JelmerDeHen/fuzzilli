function main() {
function v1(v2,v3) {
    let v6 = 0;
    do {
        const v12 = new Uint8ClampedArray(5171);
        // v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "buffer", "byteOffset", "__proto__", "byteLength"], withMethods: ["fill", "findIndex", "keys", "forEach", "slice", "some", "set", "copyWithin", "values", "join", "find", "entries", "lastIndexOf", "reverse", "includes", "reduceRight", "every", "indexOf", "sort", "filter", "map", "subarray", "reduce"])
        v12[1337] = v3;
        for (let v14 = 0; v14 < 100; v14++) {
        }
        const v15 = v6 + 1;
        // v15 = .primitive
        v6 = v15;
    } while (v6 < 8);
}
let v16 = 1337;
const v17 = v1(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
