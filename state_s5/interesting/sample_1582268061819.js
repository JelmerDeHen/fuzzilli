function main() {
for (const v1 in "undefined") {
    function v2(v3,v4,v5) {
        'use strict'
        const v7 = [1337,1337,1337,v1,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        for (const v8 in v7) {
            let v10 = 0;
            let v11 = v10;
            const v13 = Math.exp(v11);
            // v13 = .number
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        }
    }
    const v17 = v2();
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
