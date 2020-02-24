function main() {
for (const v1 in "undefined") {
    const v7 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
    // v7 = .object(ofGroup: Object, withProperties: ["b", "c", "constructor", "a", "__proto__"], withMethods: ["d"])
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
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
}
}
%NeverOptimizeFunction(main);
main();
