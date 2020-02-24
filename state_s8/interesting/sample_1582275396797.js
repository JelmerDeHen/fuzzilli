function main() {
const v2 = new Int16Array(19873);
// v2 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
let v5 = 0;
do {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        // v9 = .primitive
        const v12 = [1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v13 = {b:2147483647};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        function v14(v15,v16) {
            function v17(v18,v19,v20,v21,v22) {
                'use strict'
                const v23 = v17.toString();
                // v23 = .unknown
                const v25 = eval(v23);
                // v25 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
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
