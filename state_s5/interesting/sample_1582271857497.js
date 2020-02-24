function main() {
function v0(v1,v2) {
    const v5 = [1337,1337];
    // v5 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v6 = [v5,v5,v5];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v9 = new WeakSet(v6);
    // v9 = .object(ofGroup: WeakSet, withProperties: ["__proto__"], withMethods: ["delete", "has", "add"])
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
