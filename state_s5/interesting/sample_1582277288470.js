function main() {
function v3(v4,v5) {
    const v8 = new Float32Array(35672);
    // v8 = .object(ofGroup: Float32Array, withProperties: ["length", "__proto__", "byteOffset", "constructor", "buffer", "byteLength"], withMethods: ["subarray", "values", "reverse", "fill", "keys", "reduceRight", "join", "find", "every", "forEach", "sort", "includes", "set", "slice", "filter", "entries", "copyWithin", "lastIndexOf", "map", "findIndex", "some", "indexOf", "reduce"])
    let v12 = 0;
    do {
        v8[-268435456] = v12;
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    } while (v12 < 1);
    for (const v14 in "undefined") {
        let v17 = 0;
        do {
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
            const v22 = v17 + 1;
            // v22 = .primitive
            v17 = v22;
        } while (v17 < 8);
        let v25 = 0;
        do {
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
        } while (v25 < 8);
    }
}
const v27 = v3();
// v27 = .unknown
const v29 = [1337];
// v29 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v30 = v29;
const v31 = v3(v30);
// v31 = .unknown
const v32 = v3();
// v32 = .unknown
}
%NeverOptimizeFunction(main);
main();
