function main() {
const v5 = {b:1337};
// v5 = .object(ofGroup: Object, withProperties: ["b", "__proto__"])
const v9 = v5[1950467978];
// v9 = .unknown
let v20 = 0;
const v21 = v20 + 1;
// v21 = .primitive
v20 = v21;
let v24 = v9;
do {
    function v25(v26,v27) {
        const v28 = v26 in v25;
        // v28 = .boolean
        let v41 = 0;
        for (const v42 in "boolean") {
            let v44 = v20;
            do {
                try {
                    let v47 = 0;
                    do {
                        const v48 = v47 + 1;
                        // v48 = .primitive
                        v47 = v48;
                    } while (v47 < 7);
                } catch(v49) {
                    let v52 = 0;
                }
                const v55 = v44 + 1;
                // v55 = .primitive
                v44 = v55;
            } while (v44 < 8);
        }
        const v56 = v41 + 1;
        // v56 = .primitive
        v41 = v56;
    }
    const v59 = [1337];
    // v59 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v60 = v59;
    const v61 = v25(v60);
    // v61 = .unknown
} while (v24 < 7);
}
%NeverOptimizeFunction(main);
main();
