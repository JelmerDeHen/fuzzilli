function main() {
let v2 = 0;
const v3 = v2 + 1;
// v3 = .primitive
v2 = v3;
function v5(v6,v7) {
    for (const v9 in "boolean") {
        let v12 = 0;
        let v15 = 0;
        const v16 = v15 + 1;
        // v16 = .primitive
        v15 = v16;
        do {
            const v20 = v12 + 1;
            // v20 = .primitive
            try {
                for (const v23 in "e") {
                }
                const v24 = "undefined".slice(3);
                // v24 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            } catch(v25) {
            }
            v12 = v20;
        } while (v12 < 8);
    }
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v28 = v27;
const v29 = v5(v28);
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
