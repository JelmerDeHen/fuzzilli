function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v6(v7,v8) {
            const v12 = {a:Reflect,d:-4294967295,length:"pizpIb2dL8"};
            // v12 = .object(ofGroup: Object, withProperties: ["a", "length", "d", "__proto__"])
            try {
                const v14 = Reflect.construct(undefined,v12,Reflect);
                // v14 = .unknown
            } catch(v15) {
            }
        }
        const v17 = [7];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        let v18 = v17;
        const v19 = v6(v18);
        // v19 = .unknown
        const v20 = v4 + 1;
        // v20 = .primitive
        v4 = v20;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
