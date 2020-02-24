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
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v19 = v18;
const v20 = v1(v19);
// v20 = .unknown
const v21 = v1(1024,4.0);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
