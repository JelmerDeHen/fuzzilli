function main() {
try {
    const v1 = [1337,1337,1337];
    // v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v5 = 0;
    const v7 = {};
    // v7 = .object(ofGroup: Object, withProperties: ["__proto__"])
    const v9 = new Proxy(0,v7);
    // v9 = .unknown
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
