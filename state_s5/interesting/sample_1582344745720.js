function main() {
function v2(v3,v4) {
    let v7 = -128;
    while (v7 < 5) {
        const v8 = v7 + 1;
        // v8 = .primitive
        const v9 = -4294967297 - v7;
        // v9 = .number
        const v10 = v7 + v9;
        // v10 = .primitive
        v7 = v8;
        let v11 = -4294967297;
        delete v10[v11];
    }
}
const v13 = [1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v14 = v13;
const v15 = v2(v14);
// v15 = .unknown
const v16 = v2(1337,-2490171089);
// v16 = .unknown
}
%NeverOptimizeFunction(main);
main();
