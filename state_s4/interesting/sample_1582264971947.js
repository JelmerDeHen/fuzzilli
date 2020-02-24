function main() {
for (const v1 in "undefined") {
    const v7 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
    // v7 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "b", "constructor", "c"], withMethods: ["d"])
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
    // v14 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
}
}
%NeverOptimizeFunction(main);
main();
