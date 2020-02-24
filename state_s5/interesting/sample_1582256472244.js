function main() {
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v5 = {b:13.37,d:1607264097,e:1607264097,constructor:v4,valueOf:WeakSet};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e", "constructor", "valueOf", "d"])
for (const v7 in "object") {
    const v13 = Symbol.toStringTag;
    // v13 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
    v5[v13] = 13.37;
    let v17 = 0;
    const v18 = v17 + 1;
    // v18 = .primitive
    v17 = v18;
    const v19 = gc();
    // v19 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
