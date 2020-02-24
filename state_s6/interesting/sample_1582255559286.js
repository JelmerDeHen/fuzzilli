function main() {
const v1 = eval();
// v1 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
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
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v33 = v32;
const v34 = v2(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
