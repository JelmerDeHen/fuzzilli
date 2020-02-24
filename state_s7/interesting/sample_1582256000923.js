function main() {
const v1 = [13.37,13.37,13.37,13.37];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v6 = 0;
const v8 = v6 + 1;
// v8 = .primitive
v6 = v8;
let v10 = 0;
do {
    const v11 = v10 + 1;
    // v11 = .primitive
    function v12(v13,v14) {
        for (let v19 = 0; v19 < 10; v19++) {
            let v21 = 0;
            const v22 = ~v21;
            // v22 = .boolean
        }
        for (const v23 in "boolean") {
            let v24 = v1;
            let v26 = 0;
            const v27 = v26 + 1;
            // v27 = .primitive
        }
    }
    const v30 = [1337];
    // v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    let v31 = v30;
    const v32 = v12(v31);
    // v32 = .unknown
    v10 = v11;
} while (v10 < 7);
}
%NeverOptimizeFunction(main);
main();
