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
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
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
