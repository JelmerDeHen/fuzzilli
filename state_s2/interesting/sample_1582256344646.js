function main() {
let v5 = 0;
function v6(v7,v8) {
    for (let v14 = 0; v14 < 10; v14++) {
    }
    let v17 = 0;
    for (const v18 in "boolean") {
        let v21 = 0;
        do {
            const v22 = "boolean".repeat(v7);
            // v22 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
            const v23 = v22.length;
            // v23 = .integer
            let v26 = 0;
            const v27 = v26 + 1;
            // v27 = .primitive
            v26 = v27;
            let v30 = 0;
            const v31 = v21 + 1;
            // v31 = .primitive
            v21 = v31;
        } while (v21 < 8);
    }
    const v32 = v17 + 1;
    // v32 = .primitive
    v17 = v32;
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v36 = v35;
const v37 = v6(v36);
// v37 = .unknown
let v43 = 0;
const v44 = v43 + 1;
// v44 = .primitive
v43 = v44;
for (let v48 = 0; v48 < 100; v48++) {
    const v49 = v6();
    // v49 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
