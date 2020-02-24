function main() {
let v4 = 0;
let v6 = 0;
let v10 = 0;
let v13 = 0;
let v17 = 0;
function v19(v20,v21) {
    let v28 = 0;
    for (const v29 in "boolean") {
        let v32 = 0;
        do {
            let v35 = 0;
            const v37 = [1337,1337,1337,1337];
            // v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
            const v39 = Object.is(v37);
            // v39 = .boolean
            do {
                const v40 = v35 + 1;
                // v40 = .primitive
                v35 = v40;
            } while (v35 < 7);
            let v43 = 0;
            const v47 = v32 + 1;
            // v47 = .primitive
            v32 = v47;
        } while (v32 < 8);
    }
    const v48 = DataView + 1;
    // v48 = .primitive
    v28 = v48;
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v52 = v51;
const v53 = v19(v52);
// v53 = .unknown
}
%NeverOptimizeFunction(main);
main();
