function main() {
const v1 = eval();
// v1 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
function v2(v3,v4) {
    let v11 = 0;
    for (const v12 in "boolean") {
        let v15 = 0;
        do {
            const v17 = Object();
            // v17 = .object()
            let v20 = 0;
            do {
                const v21 = v20 + 1;
                // v21 = .primitive
                v20 = v21;
            } while (v20 < 7);
            let v24 = 0;
            const v28 = v15 + 1;
            // v28 = .primitive
            v15 = v28;
        } while (v15 < 8);
    }
    const v29 = v11 + 1;
    // v29 = .primitive
    v11 = v29;
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v33 = v32;
const v34 = v2(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
