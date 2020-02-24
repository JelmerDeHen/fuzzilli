function main() {
function v0(v1,v2) {
    const v5 = new Float32Array(35672);
    // v5 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "length", "constructor", "__proto__", "buffer", "byteLength"], withMethods: ["some", "find", "join", "keys", "forEach", "every", "reduceRight", "filter", "values", "entries", "sort", "copyWithin", "map", "subarray", "reverse", "fill", "reduce", "slice", "includes", "indexOf", "set", "findIndex", "lastIndexOf"])
    let v8 = Float32Array;
    do {
        v5[-268435456] = v8;
        const v9 = v8 + 1;
        // v9 = .primitive
        v8 = v9;
    } while (v8 < 1);
    for (const v10 in "undefined") {
        let v13 = 0;
        do {
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
        } while (v13 < 8);
        let v17 = 0;
        do {
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
        } while (v17 < 8);
    }
}
const v19 = v0();
// v19 = .unknown
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v22 = v21;
const v23 = v0(v22);
// v23 = .unknown
const v24 = v0();
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
