function main() {
function v1(v2,v3) {
    let v10 = 0;
    for (const v11 in "boolean") {
        let v14 = 0;
        do {
            try {
                let v17 = 0;
                do {
                    const v18 = v17 + 1;
                    // v18 = .primitive
                    v17 = v18;
                } while (v17 < 7);
            } catch(v19) {
                let v22 = 0;
            }
            const v26 = v14 + 1;
            // v26 = .primitive
            v14 = v26;
        } while (v14 < 8);
    }
    do {
        const v27 = v10 + 1;
        // v27 = .primitive
        v10 = v27;
    } while (v10 < 3);
    for (const v29 in "object") {
    }
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v33 = v32;
const v34 = v1(v33);
// v34 = .unknown
const v35 = v1(1024,4.0);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
