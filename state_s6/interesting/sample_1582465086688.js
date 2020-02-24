function main() {
const v4 = [13.37,"DPtrqeeOKz"];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v6(v7,v8) {
    const v11 = [13.37,13.37,13.37,13.37,13.37];
    // v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v12 = new Set(v11);
    // v12 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["delete", "add", "forEach", "has", "clear", "keys", "values", "entries"])
    const v13 = v12.entries();
    // v13 = .object()
    const v14 = Object(v13,v13,Set,v8);
    // v14 = .object()
    return v6;
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
