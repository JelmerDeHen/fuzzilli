function main() {
function v1(v2,v3) {
    let v6 = 0;
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            for (const v12 of "pvU0UUjoya") {
            }
            const v13 = v10 + 1;
            // v13 = .primitive
            v10 = v13;
        } while (v10 < 8);
    }
    const v14 = "boolean" + 1;
    // v14 = .primitive
    v6 = v14;
    const v15 = v6 + "boolean";
    // v15 = .primitive
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v19 = v18;
const v20 = v1(v19);
// v20 = .unknown
const v21 = v1(1024,4.0);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
