function main() {
function v1(v2,v3) {
    const v4 = v2 in v1;
    // v4 = .boolean
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            for (const v14 of "pvU0UUjoya") {
            }
            const v15 = v9 + 1;
            // v15 = .primitive
            v9 = v15;
        } while (v9 < 8);
    }
    const v19 = [13.37,13.37,13.37,13.37,13.37];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    for (const v21 in "object") {
        const v22 = ~v4;
        // v22 = .boolean
    }
    const v25 = 1337 == 13.37;
    // v25 = .boolean
    const v27 = Object();
    // v27 = .object()
    let v35 = 0;
    return v19;
    const v36 = v35 + 1;
    // v36 = .primitive
    v35 = v36;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v40 = v39;
const v41 = v1(v40);
// v41 = .unknown
const v42 = v1(1024,4.0);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
