function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = new Set(v4);
// v5 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "add", "forEach", "has", "entries", "values", "delete"])
const v6 = v5.entries();
// v6 = .object()
function v7(v8,v9) {
    v6.__proto__ = v1;
    let v12 = 0;
    while (v12 < 10) {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    }
}
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = v7();
    // v18 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
