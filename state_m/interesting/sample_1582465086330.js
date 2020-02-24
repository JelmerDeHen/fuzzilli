function main() {
const v4 = [13.37,"DPtrqeeOKz"];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v6(v7,v8) {
    const v11 = [13.37,13.37,13.37,13.37,13.37];
    // v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v12 = new Set(v11);
    // v12 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["add", "clear", "delete", "entries", "has", "forEach", "keys", "values"])
    const v13 = v12.entries();
    // v13 = .object()
    const v14 = Object(v13,v13,Set,v8);
    // v14 = .object()
    return v6;
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v17 = v16;
const v18 = v6(v17);
// v18 = .unknown
for (let v22 = 0; v22 < 100; v22++) {
    const v23 = v18(1337,v4,13.37);
    // v23 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
