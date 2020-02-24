function main() {
for (let v3 = 0; v3 < 3; v3++) {
    const v5 = [1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v6 = v5;
    let v8 = undefined;
    let v15 = 0;
    for (const v16 in "boolean") {
        let v19 = 0;
        do {
            let v21 = eval;
            const v23 = v21("__proto__");
            // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            let v26 = 0;
            const v27 = v26 + 1;
            // v27 = .primitive
            v26 = v27;
            let v30 = 0;
            const v31 = v19 + 1;
            // v31 = .primitive
            v19 = v31;
        } while (v19 < 8);
    }
    const v32 = v15 + 1;
    // v32 = .primitive
    v15 = v32;
}
}
%NeverOptimizeFunction(main);
main();
