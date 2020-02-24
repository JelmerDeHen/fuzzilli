function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v9 = [13.37,13.37,13.37];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v10 = v9;
let v11 = isNaN;
function v12(v13,v14) {
    for (const v16 in "boolean") {
        let v21 = 0;
        do {
            v9.length = v21;
            let v24 = 0;
            const v25 = v24 + 1;
            // v25 = .primitive
            v24 = v25;
            let v31 = 0;
            const v32 = v31 + 1;
            // v32 = .primitive
            v31 = v32;
            const v36 = v21 + 1;
            // v36 = .primitive
            v21 = v36;
        } while (v21 < 8);
        let v37 = 0;
        do {
            for (const v40 in "boolean") {
                let v43 = 0;
                do {
                    let v46 = 0;
                    const v47 = v46 + 1;
                    // v47 = .primitive
                    v46 = v47;
                    let v53 = 0;
                    const v57 = v43 + 1;
                    // v57 = .primitive
                    v43 = v57;
                } while (v43 < 8);
            }
            const v59 = v9.find(v11,v10);
            // v59 = .unknown
            let v60 = 0;
            do {
                const v61 = v60 + 1;
                // v61 = .primitive
                v60 = v61;
            } while (v60 < 7);
            const v62 = v37 + 1;
            // v62 = .primitive
            v37 = v62;
        } while (v37 < 8);
    }
}
const v64 = [1337];
// v64 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v65 = v64;
const v66 = v12(v65);
// v66 = .unknown
try {
} catch(v67) {
}
}
%NeverOptimizeFunction(main);
main();
