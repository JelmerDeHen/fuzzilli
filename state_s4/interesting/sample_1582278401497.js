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
        // v27 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        v27[5] = 500915904;
        const v29 = new Int8Array(v8);
        // v29 = .object(ofGroup: Int8Array, withProperties: ["__proto__", "buffer", "byteOffset", "constructor", "length", "byteLength"], withMethods: ["some", "fill", "copyWithin", "values", "reduceRight", "lastIndexOf", "findIndex", "slice", "join", "indexOf", "reverse", "sort", "forEach", "map", "find", "subarray", "reduce", "every", "keys", "includes", "entries", "filter", "set"])
        const v30 = v24.getOwnPropertyDescriptors(v24);
        // v30 = .object()
        v30[v5] = "symbol";
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v36 = v35;
const v37 = v6(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
