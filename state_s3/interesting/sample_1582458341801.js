function main() {
const v3 = [13.37,"DPtrqeeOKz"];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v5(v6,v7) {
    const v10 = [13.37,13.37,13.37,13.37,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v11 = new Set(v10);
    // v11 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["entries", "has", "values", "add", "delete", "forEach", "keys", "clear"])
    v10.__proto__ = v11;
    const v12 = v11.keys();
    // v12 = .object()
    return v5;
}
const v14 = [1337];
// v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v15 = v14;
const v16 = v5(v15);
// v16 = .unknown
for (let v20 = 0; v20 < 100; v20++) {
    const v21 = v16(979093115,v3,13.37);
    // v21 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
