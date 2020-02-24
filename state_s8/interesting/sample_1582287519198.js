function main() {
function v0(v1,v2) {
    const v4 = [1337];
    // v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v7 = [1337];
    // v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    try {
        const v10 = Symbol.prototype;
        // v10 = .unknown
        v10[v10] = 1337;
    } catch(v11) {
    }
    const v12 = v7 < 13.37;
    // v12 = .boolean
    arguments.b = v4;
}
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = v0();
    // v18 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
