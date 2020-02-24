function main() {
for (const v1 in "object") {
    function v3(v4,v5) {
        const v6 = v4 in v3;
        // v6 = .boolean
        const v8 = [13.37,13.37,13.37,13.37,13.37];
        // v8 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        Number[4294967295] = v8;
        const v12 = [13.37,13.37,13.37,13.37,13.37];
        // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
