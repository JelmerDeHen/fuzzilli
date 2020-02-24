function main() {
for (const v1 in "object") {
    function v3(v4,v5) {
        const v6 = v4 in v3;
        // v6 = .boolean
        const v8 = [13.37,13.37,13.37,13.37,13.37];
        // v8 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        Number[4294967295] = v8;
        const v12 = [13.37,13.37,13.37,13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
        let v13 = v12;
        Number.__proto__ = v13;
        let v21 = 0;
        for (const v22 in "boolean") {
            let v25 = 0;
            do {
                let v28 = 0;
                do {
                    const v29 = v28 + 1;
                    // v29 = .primitive
                    v28 = v29;
                } while (v28 < 7);
                let v32 = 0;
                const v35 = v25 + 1;
                // v35 = .primitive
                v25 = v35;
            } while (v25 < 8);
        }
        const v36 = v21 + 1;
        // v36 = .primitive
        v21 = v36;
    }
    const v39 = v3("undefined",4.0);
    // v39 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
