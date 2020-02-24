function main() {
function v1(v2,v3) {
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    for (const v9 in "boolean") {
        let v12 = 0;
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
        let v16 = 0;
        do {
            const v17 = "species" in v2;
            // v17 = .boolean
            const v18 = v16 + 1;
            // v18 = .primitive
            v16 = v18;
        } while (v16 < 5);
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v21 = v20;
const v22 = v1(v21);
// v22 = .unknown
const v23 = {set:v1};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set"])
const v24 = v1(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
