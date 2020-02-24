function main() {
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
let v13 = 0;
const v14 = v13 + 1;
// v14 = .primitive
v13 = v14;
for (const v15 in "object") {
    let v22 = 0;
    function v23(v24,v25) {
        const v29 = [3156875969,3156875969,1337,DataView];
        // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        let v33 = 0;
        for (const v34 in "boolean") {
            let v37 = 0;
            do {
                try {
                    let v40 = 0;
                    do {
                        const v41 = v40 + 1;
                        // v41 = .primitive
                        v40 = v41;
                    } while (v40 < 7);
                } catch(v42) {
                    let v45 = 0;
                    while (v45 < 10) {
                    }
                }
                const v46 = v37 + 1;
                // v46 = .primitive
                v37 = v46;
            } while (v37 < 8);
        }
        do {
            const v47 = v33 + 1;
            // v47 = .primitive
            v33 = v47;
        } while (v33 < 3);
        return v29;
    }
    const v49 = [1337];
    // v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v50 = v49;
    const v51 = v23(v50);
    // v51 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
