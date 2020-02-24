function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v6 = v4;
function v16(v17,v18) {
    let v43 = 0;
    for (const v44 in "boolean") {
        let v47 = 0;
        do {
            try {
                let v50 = 0;
                do {
                    const v51 = v50 + 1;
                    // v51 = .primitive
                    v50 = v51;
                } while (v50 < 7);
            } catch(v52) {
                let v55 = 0;
                try {
                } catch(v59) {
                    let v60 = v52;
                    v6 = 13.37;
                }
            }
            const v61 = v47 + 1;
            // v61 = .primitive
            v47 = v61;
        } while (v47 < 8);
    }
    const v62 = v43 + 1;
    // v62 = .primitive
    v43 = v62;
}
const v81 = [1337];
// v81 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v83 = v81;
const v93 = v16(v83);
// v93 = .unknown
}
%NeverOptimizeFunction(main);
main();
