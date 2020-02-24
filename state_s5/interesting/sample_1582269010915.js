function main() {
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            v13 = "unscopable";
            for (let v17 = 0; v17 < 7; v17++) {
                let v20 = 0;
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            }
            const v22 = v13 / -851138.6232036713;
            // v22 = .number
            const v23 = "__proto__".slice(v22,v5);
            // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
            const v24 = v10 + 1;
            // v24 = .primitive
            v10 = v24;
        } while (v10 < 8);
    }
}
const v26 = [7];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v27 = v26;
const v28 = v3(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
