function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v2 = v1;
let v4 = undefined;
for (const v9 in "boolean") {
    let v12 = 0;
    function v16(v17,v18) {
        const v19 = v17 in v16;
        // v19 = .boolean
        for (const v21 in "boolean") {
            let v24 = 0;
            do {
                const v25 = v24 + 1;
                // v25 = .primitive
                v24 = v25;
                const v26 = v25 / v19;
                // v26 = .number
                const v27 = "unscopable".padEnd(1337,v21);
                // v27 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
                const v28 = typeof v26;
                // v28 = .string
            } while (v24 < 8);
        }
    }
    const v30 = v16(2600425381);
    // v30 = .unknown
    const v32 = v12 + 1;
    // v32 = .primitive
    v12 = v32;
}
}
%NeverOptimizeFunction(main);
main();
