function main() {
const v3 = [13.37,"DPtrqeeOKz"];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v5(v6,v7) {
    const v10 = [13.37,13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v11 = new Set(v10);
    // v11 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "clear", "keys", "add", "forEach", "values", "entries", "has"])
    v10.__proto__ = v11;
    const v12 = v11.entries();
    // v12 = .object()
    return v5;
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v18 = v17;
const v19 = v5(v18);
// v19 = .unknown
for (let v23 = 0; v23 < 100; v23++) {
    const v24 = v19(1337,v3,13.37);
    // v24 = .unknown
}
}
%NeverOptimizeFunction(main);
main();