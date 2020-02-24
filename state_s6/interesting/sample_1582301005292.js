function main() {
for (const v1 in "boolean") {
    let v4 = 0;
    do {
        function v6(v7,v8) {
            const v10 = Math.fround(v7);
            // v10 = .number
            const v12 = v10 < 0;
            // v12 = .boolean
            const v16 = [13.37];
            // v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v18 = [1337,1337,1337];
            // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v19 = ["N*d4*m/H0F","N*d4*m/H0F",v18];
            // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v20 = {valueOf:v18,b:-1662380622,c:v16,a:v16,__proto__:1337,constructor:v19};
            // v20 = .object(ofGroup: Object, withProperties: ["c", "constructor", "valueOf", "a", "__proto__", "b"])
            const v22 = [13.37,13.37,v20,13.37];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            for (const v23 of v22) {
                function v24(v25,v26) {
                    let v30 = v25;
                    let v31 = v30;
                    while (v31 === v30) {
                        const v32 = v31 & v30;
                        // v32 = .integer
                        for (let v36 = 0; v36 < 4; v36++) {
                        }
                        const v37 = !v32;
                        // v37 = .boolean
                        v31 = v37;
                    }
                }
                const v38 = v24(13.37);
                // v38 = .unknown
            }
        }
        const v42 = v6(RegExp);
        // v42 = .unknown
        const v43 = v4 + 1;
        // v43 = .primitive
        v4 = v43;
    } while (v4 < 8);
}
}
%NeverOptimizeFunction(main);
main();
