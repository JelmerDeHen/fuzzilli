function main() {
let v3 = 0;
let v6 = 0;
const v7 = v6 + 1;
// v7 = .primitive
v6 = v7;
const v8 = v3 + 1;
// v8 = .primitive
v3 = v8;
const v10 = [1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v11 = v10;
let v13 = undefined;
let v17 = 0;
const v19 = v17 + 1;
// v19 = .primitive
v17 = v19;
function v24(v25,v26) {
    const v30 = 13.37 + 1;
    // v30 = .primitive
    let v31 = 0;
    for (const v32 in "boolean") {
        let v35 = 0;
        do {
            let v36 = v30;
            const v37 = v36 + 1;
            // v37 = .primitive
            for (const v39 in "boolean") {
                let v42 = 0;
                do {
                    const v44 = [NaN,NaN];
                    // v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                    const v46 = [13.37,...v44];
                    // v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
                    const v47 = v42 + 1;
                    // v47 = .primitive
                    v42 = v47;
                } while (v42 < 8);
            }
            const v48 = v35 + 1;
            // v48 = .primitive
            v35 = v48;
        } while (v35 < 8);
    }
    const v49 = v31 + 1;
    // v49 = .primitive
}
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v53 = v52;
const v54 = v24(v53);
// v54 = .unknown
}
%NeverOptimizeFunction(main);
main();
