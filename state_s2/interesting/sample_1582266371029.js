function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        const v7 = Symbol.unscopables;
        // v7 = .unknown
        const v8 = v7 == v7;
        // v8 = .boolean
        let v10 = 0;
        do {
            let v13 = 0;
            do {
                const v14 = v13 + 1;
                // v14 = .primitive
                const v16 = eval();
                // v16 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
                v13 = v14;
            } while (v13 < 7);
            const v17 = v10 + 1;
            // v17 = .primitive
            v10 = v17;
        } while (v10 < 8);
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v20 = v19;
const v21 = v0(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
