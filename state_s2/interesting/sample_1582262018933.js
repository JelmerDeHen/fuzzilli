function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            while (v10 < 10) {
                const v11 = v10 + 1;
                // v11 = .primitive
                v10 = v11;
            }
            let v16 = 1337;
            let v18 = undefined;
            let v21 = 0;
            const v27 = new Uint8ClampedArray(5171);
            // v27 = .object(ofGroup: Uint8ClampedArray, withProperties: ["byteLength", "__proto__", "byteOffset", "constructor", "length", "buffer"], withMethods: ["entries", "every", "lastIndexOf", "values", "reverse", "map", "copyWithin", "subarray", "reduce", "filter", "sort", "find", "keys", "reduceRight", "join", "forEach", "fill", "set", "indexOf", "some", "includes", "findIndex", "slice"])
            v27[1337] = undefined;
            const v29 = v21 + 1;
            // v29 = .primitive
            v21 = v29;
            const v30 = v7 + 1;
            // v30 = .primitive
            v7 = v30;
        } while (v7 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v33 = v32;
const v34 = v0(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
