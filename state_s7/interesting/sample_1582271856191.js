function main() {
function v0(v1,v2) {
    const v5 = [1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v6 = [v5,v5,v5];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v9 = new WeakSet(v6);
    // v9 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["delete", "add", "has"])
    for (const v10 in "boolean") {
        let v13 = 0;
        let v16 = 0;
        const v17 = v16 % 9;
        // v17 = .number
        const v18 = v17 + 1;
        // v18 = .primitive
        v16 = v18;
        const v20 = v9.delete("iterator");
        // v20 = .boolean
        for (let v23 = 0; v23 < 100; v23++) {
        }
        const v24 = v13 + 1;
        // v24 = .primitive
        v13 = v24;
    }
}
const v25 = v0();
// v25 = .unknown
let v28 = 0;
const v29 = v28 + 1;
// v29 = .primitive
v28 = v29;
}
%NeverOptimizeFunction(main);
main();