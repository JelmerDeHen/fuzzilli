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
// v11 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v12 = v11;
const v13 = v1(v12);
// v13 = .unknown
const v14 = v1(1337,-4163351276);
// v14 = .unknown
}
%NeverOptimizeFunction(main);
main();
