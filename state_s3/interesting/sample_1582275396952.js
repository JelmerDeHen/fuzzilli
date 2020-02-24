function main() {
const v2 = new Int16Array(19873);
// v2 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
let v5 = 0;
do {
    let v8 = 0;
    do {
        const v9 = v8 + 1;
        // v9 = .primitive
        const v12 = [1337,1337,1337,1337];
        // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v13 = {b:2147483647};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
        function v14(v15,v16) {
            function v17(v18,v19,v20,v21,v22) {
                'use strict'
                const v23 = v17.toString();
                // v23 = .unknown
                const v25 = eval(v23);
                // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
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
