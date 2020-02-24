function main() {
let v2 = 0;
do {
    const v3 = v2 + 1;
    // v3 = .primitive
    function v4(v5,v6) {
        for (let v11 = 0; v11 < 10; v11++) {
            let v13 = 0;
            const v14 = ~v13;
            // v14 = .boolean
        }
        let v17 = 0;
        for (const v18 in "boolean") {
            let v21 = 0;
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
            let v28 = 0;
            const v29 = v21 + 1;
            // v29 = .primitive
            v21 = v29;
        }
        const v30 = v17 + 1;
        // v30 = .primitive
        v17 = v30;
        for (const v32 in "object") {
        }
    }
    const v34 = [1337];
    // v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v35 = v34;
    const v36 = v4(v35);
    // v36 = .unknown
    v2 = v3;
} while (v2 < 7);
}
%NeverOptimizeFunction(main);
main();
