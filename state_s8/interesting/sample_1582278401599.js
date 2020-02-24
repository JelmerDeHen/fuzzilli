function main() {
const v2 = "object".constructor;
// v2 = .function()
const v4 = Object();
// v4 = .object()
const v5 = v4 * v2;
// v5 = .number
function v6(v7,v8) {
    for (const v10 in "boolean") {
        let v13 = 0;
        const v14 = 8 + 1;
        // v14 = .primitive
        v13 = v14;
        let v17 = 0;
        do {
            const v18 = v17 + 1;
            // v18 = .primitive
            v17 = v18;
        } while (v17 < 512);
        function v20(v21,v22) {
        }
        let v24 = Object;
        const v27 = [-4096,-4096];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        v27[5] = 500915904;
        const v29 = new Int8Array(v8);
        // v29 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "buffer", "length", "byteOffset", "byteLength"], withMethods: ["values", "every", "reverse", "reduce", "lastIndexOf", "slice", "sort", "fill", "indexOf", "copyWithin", "set", "some", "subarray", "filter", "reduceRight", "forEach", "find", "join", "includes", "findIndex", "keys", "entries", "map"])
        const v30 = v24.getOwnPropertyDescriptors(v24);
        // v30 = .object()
        v30[v5] = "symbol";
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v36 = v35;
const v37 = v6(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
