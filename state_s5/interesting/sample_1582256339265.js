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
            // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
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
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
