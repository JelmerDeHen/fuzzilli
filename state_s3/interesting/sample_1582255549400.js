function main() {
let v1 = "e";
function v3(v4,v5) {
    const v6 = v4 in v3;
    // v6 = .boolean
    let v13 = 0;
    for (const v14 in "boolean") {
        let v17 = 0;
        do {
            let v20 = 0;
            const v21 = v20 + 1;
            // v21 = .primitive
            v20 = v21;
            let v24 = 0;
            let v30 = 0;
            const v34 = v17 + 1;
            // v34 = .primitive
            v17 = v34;
        } while (v17 < 8);
    }
    const v35 = v13 + 1;
    // v35 = .primitive
    v13 = v35;
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v40 = v39;
const v41 = v3(v40);
// v41 = .unknown
const v42 = v3(1024,4.0);
// v42 = .unknown
const v46 = v3(v1);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
