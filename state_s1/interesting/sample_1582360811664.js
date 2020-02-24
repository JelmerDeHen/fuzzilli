function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
let v9 = 0;
const v10 = [1337,1337,1337,1337,1337];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v13 = [13.37,13.37,13.37,13.37];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v14(v15,v16) {
    function v19(v20,v21) {
        let v25 = -128;
        while (v25 < 5) {
            let v28 = 0;
            const v29 = v28 + 1;
            // v29 = .primitive
            v28 = v29;
            arguments.length = v21;
            const v30 = v25 + 1;
            // v30 = .primitive
            v25 = v30;
        }
    }
    const v31 = gc(...arguments);
    // v31 = .undefined
    let v34 = 0;
    const v35 = v19(Array);
    // v35 = .unknown
    const v37 = Symbol.species;
    // v37 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    v10[v37] = v31;
    let v40 = 0;
    const v41 = v40 + 1;
    // v41 = .primitive
    v40 = v41;
    let v44 = 0;
    const v45 = v44 + 1;
    // v45 = .primitive
    v44 = v45;
    let v47 = 0;
    while (v47 < 1337) {
        const v48 = v47 + 1;
        // v48 = .primitive
        v47 = v48;
    }
}
const v49 = v13.sort(v14);
// v49 = .undefined
let v52 = 0;
const v53 = v52 + 1;
// v53 = .primitive
v52 = v53;
}
%NeverOptimizeFunction(main);
main();
