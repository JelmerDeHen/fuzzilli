function main() {
for (let v3 = 0; v3 < 3; v3++) {
    function v4(v5,v6) {
        let v13 = 0;
        for (const v14 in "boolean") {
            let v17 = 0;
            do {
                let v20 = 0;
                do {
                    const v21 = v20 + 1;
                    // v21 = .primitive
                    v20 = v21;
                } while (v20 < 7);
                let v24 = 0;
                const v25 = v17 + 1;
                // v25 = .primitive
                v17 = v25;
            } while (v17 < 8);
        }
        const v26 = v13 + 1;
        // v26 = .primitive
        const v29 = [13.37,13.37,13.37,13.37];
        // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v31 = [1337,1337];
        // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v32 = [v31];
        // v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v33 = {valueOf:Int32Array,c:v31,__proto__:v32,b:v29};
        // v33 = .object(ofGroup: Object, withProperties: ["valueOf", "c", "b", "__proto__"])
        const v35 = new Map(v33);
        // v35 = .object(ofGroup: Map, withProperties: ["__proto__", "size"], withMethods: ["set", "get", "keys", "entries", "forEach", "clear", "values", "delete", "has"])
        const v36 = v35.clear();
        // v36 = .undefined
        v13 = v26;
    }
    const v39 = [1337];
    // v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    let v40 = v39;
    const v41 = v4(v40);
    // v41 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
