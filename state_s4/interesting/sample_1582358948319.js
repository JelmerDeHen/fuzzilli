function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = new Set(v4);
// v5 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "delete", "values", "has", "forEach", "add", "entries"])
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
