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
            // v18 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            let v22 = 0;
            const v23 = v22 % 9;
            // v23 = .number
        }
        const v25 = [127];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
