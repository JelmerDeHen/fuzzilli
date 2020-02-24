function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = [];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = new Set(v2);
// v6 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "add", "forEach", "has", "entries", "values", "delete"])
let v9 = 0;
let v12 = 0;
const v13 = v12 + 1;
// v13 = .primitive
v12 = v13;
const v14 = (1337)[v4];
// v14 = .unknown
let v17 = 0;
do {
    const v18 = v17 + 1;
    // v18 = .primitive
    function v19(v20,v21) {
        const v22 = v6.add(v18);
        // v22 = .object(ofGroup: Set, withProperties: ["__proto__", "size"], withMethods: ["clear", "keys", "add", "forEach", "has", "entries", "values", "delete"])
        let v32 = 0;
        for (const v33 in "boolean") {
            let v36 = 0;
            do {
                let v39 = 0;
                const v40 = v39 + 1;
                // v40 = .primitive
                v39 = v40;
                let v43 = 0;
                const v44 = v36 + 1;
                // v44 = .primitive
                v36 = v44;
            } while (v36 < 8);
        }
        const v45 = v32 + 1;
        // v45 = .primitive
        v32 = v45;
    }
    const v48 = [1337];
    // v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v49 = v48;
    const v50 = v19(v49);
    // v50 = .unknown
    let v53 = 0;
    const v54 = v53 + 1;
    // v54 = .primitive
    v53 = v54;
    v17 = v18;
} while (v17 < 7);
}
%NeverOptimizeFunction(main);
main();
