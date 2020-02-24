function main() {
for (const v1 in "undefined") {
    const v7 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
    // v7 = .object(ofGroup: Object, withProperties: ["a", "b", "__proto__", "c", "constructor"], withMethods: ["d"])
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
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
}
%NeverOptimizeFunction(main);
main();
