function main() {
const v2 = {length:"N0Xx92zvHQ"};
// v2 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
const v5 = (13.37)[v2];
// v5 = .unknown
let v11 = 0;
const v12 = v11 + 1;
// v12 = .primitive
v11 = v12;
function v13(v14,v15) {
    let v18 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            do {
                const v26 = v25 + 1;
                // v26 = .primitive
                v25 = v26;
            } while (v25 < 7);
            let v28 = 0;
            const v29 = v22 + 1;
            // v29 = .primitive
            v22 = v29;
        } while (v22 < 8);
    }
    const v30 = v18 + 1;
    // v30 = .primitive
    let v32 = 0;
    const v33 = v32 + 1;
    // v33 = .primitive
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v36 = v35;
const v37 = v13(v36);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
