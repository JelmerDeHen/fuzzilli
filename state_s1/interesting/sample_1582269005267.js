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
            // v23 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
            const v24 = v10 + 1;
            // v24 = .primitive
            v10 = v24;
        } while (v10 < 8);
    }
}
const v26 = [7];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v27 = v26;
const v28 = v3(v27);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
