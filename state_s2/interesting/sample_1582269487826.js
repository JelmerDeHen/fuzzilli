function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        const v10 = Math.log2(1337);
        // v10 = .number
        const v12 = Math.log10(v10);
        // v12 = .number
        let v16 = 0;
        const v19 = eval(1337);
        // v19 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
        do {
            let v24 = 7;
            let v27 = 0;
            do {
                const v28 = v27 + 1;
                // v28 = .primitive
                v27 = v28;
            } while (v27 < 7);
            const v29 = v7 + 1;
            // v29 = .primitive
            v7 = v29;
        } while (v7 < 8);
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
