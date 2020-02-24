function main() {
for (const v1 in "undefined") {
    const v7 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
    // v7 = .object(ofGroup: Object, withProperties: ["a", "b", "c", "constructor", "__proto__"], withMethods: ["d"])
    let v8 = v7;
    for (const v10 in "boolean") {
        try {
            const v11 = v8.__proto__;
            // v11 = .object()
            v8 = v11;
            v11.toString = RegExp;
        } catch(v12) {
        }
    }
    const v14 = [1337,1337,1337,1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
}
}
%NeverOptimizeFunction(main);
main();
