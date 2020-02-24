function main() {
function v2(v3,v4) {
    let v8 = 0;
    do {
        for (const v10 of "pvU0UUjoya") {
        }
        const v11 = v8 + 1;
        // v11 = .primitive
        v8 = v11;
    } while (v8 < 8);
    let v15 = 0;
    while (v15 < 5) {
        const v19 = v15 + 1;
        // v19 = .primitive
        v15 = v19;
    }
    const v20 = "object".length;
    // v20 = .integer
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v24 = v23;
const v25 = v2(v24);
// v25 = .unknown
const v26 = v2(1024,4.0);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
