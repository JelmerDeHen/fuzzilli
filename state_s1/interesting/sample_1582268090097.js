function main() {
for (const v1 in "undefined") {
    function v2(v3,v4,v5) {
        'use strict'
        const v7 = [1337,1337,1337,v1,1337];
        // v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        for (const v8 in v7) {
            let v10 = 0;
            let v11 = v10;
            const v13 = Math.exp(v11);
            // v13 = .number
            const v16 = eval(1337);
            // v16 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        }
    }
    const v17 = v2();
    // v17 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
