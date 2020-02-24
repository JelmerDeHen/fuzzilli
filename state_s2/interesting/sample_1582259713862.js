function main() {
const v2 = [13.37,13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v3(v4,v5) {
    for (const v8 in "byteOffset") {
        const v11 = "size".concat(8);
        // v11 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        let v12 = 0;
        do {
            let v15 = 0;
            const v16 = v15 + 1;
            // v16 = .primitive
            v15 = v16;
            let v19 = 0;
            do {
                const v20 = "boolean" == v11;
                // v20 = .boolean
                if (v20) {
                    const v21 = v11.trim();
                    // v21 = .undefined
                } else {
                }
                const v22 = v19 + 1;
                // v22 = .primitive
                v19 = v22;
            } while (v19 < 10);
            const v23 = v12 + 1;
            // v23 = .primitive
            v12 = v23;
        } while (v12 < 8);
    }
}
let v24 = v2;
const v25 = v3(v24);
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
