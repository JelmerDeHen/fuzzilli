function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v5(v6,v7) {
            let v10 = 0;
            let v13 = 0;
            const v14 = v13 + 1;
            // v14 = .primitive
            const v18 = eval(1337);
            // v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            let v22 = 0;
            const v23 = v22 % 9;
            // v23 = .number
        }
        const v25 = [127];
        // v25 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
        let v26 = v25;
        const v27 = v5(v26);
        // v27 = .unknown
        const v28 = v4 + 1;
        // v28 = .primitive
        v4 = v28;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
