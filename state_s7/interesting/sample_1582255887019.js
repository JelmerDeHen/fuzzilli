function main() {
let v3 = 0;
const v4 = v3 + 1;
// v4 = .primitive
v3 = v4;
function v5(v6,v7) {
    const v9 = [13.37,13.37,13.37];
    // v9 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v11 = {...v9,...1337};
    // v11 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "constructor"], withMethods: ["flatMap", "join", "map", "reduce", "entries", "findIndex", "every", "sort", "keys", "push", "flat", "splice", "pop", "reduceRight", "includes", "concat", "unshift", "filter", "reverse", "toString", "some", "find", "indexOf", "lastIndexOf", "shift", "forEach", "values", "copyWithin", "fill", "slice", "toLocaleString"])
    let v18 = 0;
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            let v25 = 0;
            const v26 = v25 + 1;
            // v26 = .primitive
            v25 = v26;
            let v29 = 0;
            const v33 = v22 + 1;
            // v33 = .primitive
            v22 = v33;
        } while (v22 < 8);
    }
    const v34 = v18 + 1;
    // v34 = .primitive
    v18 = v34;
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v38 = v37;
const v39 = v5(v38);
// v39 = .unknown
const v40 = v5();
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
