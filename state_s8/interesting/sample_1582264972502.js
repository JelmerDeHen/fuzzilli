function main() {
for (const v1 in "undefined") {
    const v7 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
    // v7 = .object(ofGroup: Object, withProperties: ["b", "a", "c", "constructor", "__proto__"], withMethods: ["d"])
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
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
}
}
%NeverOptimizeFunction(main);
main();
