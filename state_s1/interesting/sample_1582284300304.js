function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v6(v7,v8) {
            const v12 = {a:Reflect,d:-4294967295,length:"pizpIb2dL8"};
            // v12 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "length", "a"])
            try {
                const v14 = Reflect.construct(undefined,v12,Reflect);
                // v14 = .unknown
            } catch(v15) {
            }
        }
        const v17 = [7];
        // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
