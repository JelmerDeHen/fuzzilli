function main() {
function v1(v2,v3) {
    let v6 = 0;
    do {
        const v12 = new Uint8ClampedArray(5171);
        // v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["length", "constructor", "byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["slice", "findIndex", "subarray", "fill", "sort", "forEach", "map", "find", "reverse", "copyWithin", "filter", "every", "reduceRight", "keys", "includes", "entries", "set", "indexOf", "lastIndexOf", "some", "reduce", "join", "values"])
        v12[1337] = 5171;
        for (let v14 = 0; v14 < 100; v14++) {
        }
        const v18 = v6 + 1;
        // v18 = .primitive
        v6 = v18;
    } while (v6 < 8);
}
let v19 = 1337;
const v20 = v1(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
