function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        function v6(v7,v8) {
            for (const v10 in "boolean") {
                let v13 = 0;
                let v16 = 0;
                const v17 = v16 + 1;
                // v17 = .primitive
                v16 = v17;
                const v18 = v13 + 1;
                // v18 = .primitive
                v13 = v18;
                const v19 = String.fromCharCode(v7);
                // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
            }
        }
        const v21 = [1337];
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        let v22 = v21;
        const v23 = v6(v22);
        // v23 = .unknown
        const v27 = [1337,1337,1337];
        // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        for (const v28 of v27) {
            let v32 = 0;
            const v33 = v32 + 1;
            // v33 = .primitive
            v32 = v33;
            for (const v34 of "boolean") {
            }
        }
        let v35 = 0;
        do {
            const v36 = v35 + 1;
            // v36 = .primitive
            v35 = v36;
        } while (v35 < 7);
    }
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v39 = v38;
const v40 = v0(v39);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
