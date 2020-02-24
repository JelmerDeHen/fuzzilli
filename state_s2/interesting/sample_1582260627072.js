function main() {
function v1(v2,v3) {
    let v6 = 0;
    do {
        const v12 = new Uint8ClampedArray(5171);
        // v12 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
        v12[1337] = v3;
        for (let v15 = 0; v15 < 100; v15++) {
            for (let v21 = 0; v21 < 127; v21++) {
                const v22 = Array(1337);
                // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
            }
        }
        const v23 = v6 + 1;
        // v23 = .primitive
        v6 = v23;
    } while (v6 < 8);
}
let v24 = 1337;
const v25 = v1(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
