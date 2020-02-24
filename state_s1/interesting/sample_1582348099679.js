function main() {
const v2 = [1337,1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v3 = {toString:4,a:4};
// v3 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "a"])
if (v3) {
} else {
    const v6 = 1337 instanceof 4;
    // v6 = .boolean
}
function v7(v8,v9) {
    let v12 = -128;
    while (v12 < 5) {
        const v13 = v12 + 1;
        // v13 = .primitive
        const v14 = -4294967297 - v13;
        // v14 = .number
        v12 = -4294967297;
        const v15 = v12 + v14;
        // v15 = .primitive
        v12 = v13;
        let v16 = -4294967297;
        delete v15[v16];
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v19 = v18;
const v20 = v7(v19);
// v20 = .unknown
const v21 = v7(1337,-2490171089);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
