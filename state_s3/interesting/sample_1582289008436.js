function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 2;
        do {
            let v9 = v7;
            const v10 = v9 % 9;
            // v10 = .number
            const v11 = v10 + 1;
            // v11 = .primitive
            v9 = v11;
            for (const v15 in "boolean") {
                let v18 = 0;
                do {
                    let v22 = 0;
                    let v25 = 0;
                    const v26 = v18 + 1;
                    // v26 = .primitive
                    v18 = v26;
                } while (v18 < 8);
            }
            const v27 = [1337,1337,1337,1337,1337];
            // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
            function v28(v29,v30) {
                return v9;
            }
            const v31 = v27.forEach(v28,"eeeRbEqfAO");
            // v31 = .undefined
            const v32 = v31 + 1;
            // v32 = .primitive
            v7 = v32;
        } while (v7 < 8);
    }
}
const v34 = [-465690606];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v35 = v34;
const v36 = v0(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
