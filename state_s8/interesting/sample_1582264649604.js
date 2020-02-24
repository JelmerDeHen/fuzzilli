function main() {
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v12 = 0;
            do {
                const v13 = v12 + 1;
                // v13 = .primitive
                const v14 = v12 / -851138.6232036713;
                // v14 = .number
                v12 = v13;
                const v15 = "__proto__".slice(v14,v4);
                // v15 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
            } while (v12 < 7);
            const v16 = v9 + 1;
            // v16 = .primitive
            v9 = v16;
        } while (v9 < 8);
    }
}
const v18 = [7];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v19 = v18;
const v20 = v2(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
