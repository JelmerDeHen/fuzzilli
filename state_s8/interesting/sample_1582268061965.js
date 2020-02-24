function main() {
for (const v1 in "undefined") {
    function v2(v3,v4,v5) {
        'use strict'
        const v7 = [1337,1337,1337,v1,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        for (const v8 in v7) {
            let v10 = 0;
            let v11 = v10;
            const v13 = Math.exp(v11);
            // v13 = .number
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
        }
    }
    const v17 = v2();
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
