function main() {
for (const v1 in "object") {
    const v5 = {a:isFinite};
    // v5 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["a"])
    function v6(v7,v8) {
        for (const v10 in "boolean") {
            let v13 = 0;
            const v14 = v5.a(-225787572,"boolean",8,v5,"boolean");
            // v14 = .unknown
            const v15 = v13 + 1;
            // v15 = .primitive
            function v18(v19,v20) {
            }
            const v22 = {get:v18,set:Object};
            // v22 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
            const v24 = v14.matchAll;
            // v24 = .unknown
            const v26 = Object.create(Symbol,v24);
            // v26 = .object()
            v13 = v15;
        }
    }
    const v28 = [1337];
    // v28 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v29 = v28;
    const v30 = v6(v29);
    // v30 = .unknown
    const v38 = gc();
    // v38 = .undefined
}
}
%NeverOptimizeFunction(main);
main();
