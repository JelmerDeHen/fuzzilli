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
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v12 = v11;
const v13 = v1(v12);
// v13 = .unknown
const v14 = v1(1337,-4163351276);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
