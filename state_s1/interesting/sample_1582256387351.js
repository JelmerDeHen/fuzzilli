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
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
