function main() {
for (const v1 in "undefined") {
    function v2(v3,v4,v5) {
        'use strict'
        const v7 = [1337,1337,1337,v1,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        for (const v8 in v7) {
            let v10 = 0;
            let v11 = v10;
            const v13 = Math.exp(v11);
            // v13 = .number
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        }
    }
    const v17 = v2();
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
