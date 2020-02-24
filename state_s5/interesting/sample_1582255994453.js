function main() {
for (let v3 = 0; v3 < 1; v3++) {
    function v5(v6,v7) {
        const v8 = v6 in v5;
        // v8 = .boolean
        let v15 = 0;
        for (const v16 in "boolean") {
            let v19 = 0;
            do {
                let v22 = 0;
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
                for (const v34 of "pvU0UUjoya") {
                }
                const v35 = v19 + 1;
                // v35 = .primitive
                v19 = v35;
            } while (v19 < 8);
        }
        const v36 = v15 + 1;
        // v36 = .primitive
        v15 = v36;
    }
    const v40 = [1337];
    // v40 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    let v41 = v40;
    const v42 = v5(v41);
    // v42 = .unknown
    const v43 = v5(1024,4.0);
    // v43 = .unknown
    let v52 = 0;
    const v53 = v52 + 1;
    // v53 = .primitive
    const v56 = eval(1337);
    // v56 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
    v52 = v53;
}
}
%NeverOptimizeFunction(main);
main();
