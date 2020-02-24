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
            // v18 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
            let v22 = 0;
            const v23 = v22 % 9;
            // v23 = .number
        }
        const v25 = [127];
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
