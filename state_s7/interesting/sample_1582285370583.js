function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v8 = new Float32Array(60257);
        // v8 = .object(ofGroup: Float32Array, withProperties: ["byteOffset", "byteLength", "constructor", "buffer", "length", "__proto__"], withMethods: ["filter", "every", "fill", "copyWithin", "slice", "includes", "entries", "reduceRight", "indexOf", "sort", "map", "lastIndexOf", "find", "values", "reverse", "reduce", "findIndex", "join", "keys", "some", "set", "subarray", "forEach"])
        const v9 = v8.byteOffset;
        // v9 = .integer
        let v11 = 0;
        let v14 = 0;
        const v15 = v14 + 1;
        // v15 = .primitive
        v14 = v15;
        v8[8] = v9;
        do {
            let v18 = 0;
            do {
                const v19 = v18 + 1;
                // v19 = .primitive
                v18 = v19;
            } while (v18 < 7);
            const v20 = v11 + 1;
            // v20 = .primitive
            v11 = v20;
        } while (v11 < 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v23 = v22;
const v24 = v0(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
