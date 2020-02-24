function main() {
function v1(v2,v3) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v10 = 0;
            const v11 = v10 + 1;
            // v11 = .primitive
            let v13 = "e";
            function v14(v15,v16) {
                const v19 = new Int16Array(19873);
                // v19 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
                const v20 = v13[8];
                // v20 = .unknown
            }
            const v22 = [1337];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            let v23 = v22;
            const v24 = v14(v23);
            // v24 = .unknown
            const v25 = v14();
            // v25 = .unknown
            let v27 = 0;
            const v28 = v27 + 1;
            // v28 = .primitive
            const v29 = v8 + 1;
            // v29 = .primitive
            v8 = v29;
        } while (v8 < 8);
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v33 = v32;
const v34 = v1(v33);
// v34 = .unknown
const v35 = v1(1024,4.0);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
