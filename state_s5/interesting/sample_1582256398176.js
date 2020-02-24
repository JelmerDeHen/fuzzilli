function main() {
function v1(v2,v3) {
    const v4 = v2 in v1;
    // v4 = .boolean
    for (const v6 in "boolean") {
        let v9 = 0;
        for (const v11 of "pvU0UUjoya") {
        }
        const v12 = v9 + 1;
        // v12 = .primitive
        v9 = v12;
    }
    const v14 = ~v4;
    // v14 = .boolean
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v18 = v17;
const v19 = v1(v18);
// v19 = .unknown
const v20 = v1(1024,4.0);
// v20 = .unknown
const v24 = v1();
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
