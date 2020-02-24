function main() {
function v0(v1,v2) {
    let v9 = 0;
    for (const v10 in "boolean") {
        let v13 = 0;
        do {
            let v16 = 0;
            const v17 = v16 + 1;
            // v17 = .primitive
            v16 = v17;
            for (let v28 = 0; v28 < 100; v28++) {
            }
            const v29 = v13 + 1;
            // v29 = .primitive
            v13 = v29;
        } while (v13 === 8);
    }
    const v30 = v9 + 1;
    // v30 = .primitive
    v9 = v30;
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
