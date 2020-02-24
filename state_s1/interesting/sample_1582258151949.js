function main() {
for (let v3 = 0; v3 < 3; v3++) {
    let v6 = 0;
    do {
        const v12 = [13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v13 = v12;
        const v14 = {__proto__:4096,constructor:isFinite,a:v12,e:"match",d:4096};
        // v14 = .object(ofGroup: Object, withProperties: ["e", "a", "__proto__", "d"], withMethods: ["constructor"])
        function v15(v16,v17) {
            let v20 = 0;
            for (const v21 in "boolean") {
                let v23 = v20;
                if (v16) {
                    const v24 = "iterator".MIN_VALUE;
                    // v24 = .unknown
                    v23 = v24;
                } else {
                }
                const v25 = v23 >= 2148685566;
                // v25 = .boolean
                v14[v13] = v25;
            }
        }
        const v27 = [1337];
        // v27 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v28 = v27;
        const v29 = v15(v28);
        // v29 = .unknown
        const v30 = v6 + 1;
        // v30 = .primitive
        v6 = v30;
    } while (v6 < 3);
}
}
%NeverOptimizeFunction(main);
main();
