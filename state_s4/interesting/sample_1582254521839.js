function main() {
let v5 = 0;
const v6 = v5 + 1;
// v6 = .primitive
v5 = v6;
for (const v8 in "object") {
    const v10 = [1337,1337];
    // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
    let v17 = 0;
    v10.a = 3;
    for (const v29 in "object") {
    }
    for (let v33 = 0; v33 < 2; v33++) {
        let v36 = 0;
        const v37 = v36 + 1;
        // v37 = .primitive
        v36 = v37;
    }
}
}
%NeverOptimizeFunction(main);
main();
