function main() {
function v3(v4,v5) {
    let v7 = -128;
    while (v7 < 1337) {
        const v8 = v7 === v7;
        // v8 = .boolean
        const v9 = v7 + 1;
        // v9 = .primitive
        const v10 = v8 - v7;
        // v10 = .number
        const v11 = v7 + v10;
        // v11 = .primitive
        v7 = v9;
        let v12 = -4294967297;
        delete v11[v12];
    }
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v15 = v14;
const v16 = v3(v15);
// v16 = .unknown
const v17 = v3(1337,-2490171089);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
