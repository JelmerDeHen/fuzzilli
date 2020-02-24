function main() {
function v1(v2,v3) {
    let v6 = -128;
    while (v6 < 5) {
        const v7 = v6 + 1;
        // v7 = .primitive
        const v8 = -128 - v6;
        // v8 = .number
        const v9 = v6 + v8;
        // v9 = .primitive
        v6 = v7;
        delete v9[v3];
    }
}
const v11 = [1337];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v12 = v11;
const v13 = v1(v12);
// v13 = .unknown
const v14 = v1(1337,-4163351276);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
