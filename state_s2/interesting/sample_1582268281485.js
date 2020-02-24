function main() {
function v0(v1,v2,v3,v4,v5) {
    'use strict'
    for (const v7 in "boolean") {
        let v10 = -4096;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            const v14 = eval(1337);
            // v14 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            v10 = v11;
        } while (v10 < 8);
        let v16 = -3888010622;
        const v17 = v16 + 1;
        // v17 = .primitive
        let v20 = "unscopable";
        const v22 = Object.getOwnPropertySymbols(v20);
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        const v23 = Math.sign(v17);
        // v23 = .number
    }
}
const v24 = v0();
// v24 = .unknown
let v30 = 0;
}
%NeverOptimizeFunction(main);
main();
