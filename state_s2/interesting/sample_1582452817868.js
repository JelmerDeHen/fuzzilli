function main() {
const v3 = [13.37,"DPtrqeeOKz"];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v5(v6,v7) {
    const v10 = [13.37,13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v11 = new Set(v10);
    // v11 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["forEach", "delete", "clear", "entries", "values", "keys", "has", "add"])
    const v12 = v11.entries();
    // v12 = .object()
    for (const v13 of v12) {
        v12.__proto__ = v10;
        let v19 = 0;
        let v22 = 0;
        let v25 = 0;
        break;
    }
    return v5;
}
const v27 = [1337];
// v27 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v28 = v27;
const v29 = v5(v28);
// v29 = .unknown
for (let v33 = 0; v33 < 100; v33++) {
    const v34 = v29(1337,v3,13.37);
    // v34 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
