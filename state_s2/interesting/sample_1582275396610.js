function main() {
const v2 = new Int16Array(19873);
// v2 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
let v5 = 0;
do {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        // v9 = .primitive
        const v12 = [1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v13 = {b:2147483647};
        // v13 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
        function v14(v15,v16) {
            function v17(v18,v19,v20,v21,v22) {
                'use strict'
                const v23 = v17.toString();
                // v23 = .unknown
                const v25 = eval(v23);
                // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            }
            const v26 = v17();
            // v26 = .unknown
        }
        const v27 = v12.findIndex(v14,v13);
        // v27 = .integer
        v8 = v9;
    } while (v8 < 7);
    const v28 = v5 + 1;
    // v28 = .primitive
    v5 = v28;
} while (v5 < 8);
}
%NeverOptimizeFunction(main);
main();
