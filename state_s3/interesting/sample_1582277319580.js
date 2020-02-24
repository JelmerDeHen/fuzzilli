function main() {
function v0(v1,v2) {
    for (const v5 in "boolean") {
        let v8 = 0;
        do {
            let v10 = v8;
            const v11 = v10 % 9;
            // v11 = .number
            const v12 = v11 + 1;
            // v12 = .primitive
            v10 = v12;
            for (const v16 in "boolean") {
                let v19 = 0;
                do {
                    let v22 = 0;
                    const v23 = v19 + 1;
                    // v23 = .primitive
                    v19 = v23;
                } while (v19 < 8);
            }
            const v24 = [1337,1337,1337,1337,1337];
            // v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            function v25(v26,v27) {
            }
            const v28 = v24.forEach(v25,"eeeRbEqfAO");
            // v28 = .undefined
            const v29 = v28 + 1;
            // v29 = .primitive
            v8 = v29;
        } while (v8 < 8);
    }
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v32 = v31;
const v33 = v0(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
