function main() {
function v0(v1,v2) {
    let v5 = 0;
    const v6 = v5 in arguments;
    // v6 = .boolean
    let v9 = -128;
    while (v9 < 5) {
        const v10 = v9 + 1;
        // v10 = .primitive
        v9 = v10;
    }
}
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v13 = v12;
const v14 = v0(v13);
// v14 = .unknown
const v16 = Symbol.iterator;
// v16 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
const v17 = v0(v16,v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
