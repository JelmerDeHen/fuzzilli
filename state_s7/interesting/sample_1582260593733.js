function main() {
function v0(v1,v2) {
    const v11 = 1337 != 13.37;
    // v11 = .boolean
    let v24 = 0;
    while (v24 < 3) {
        const v25 = Array(v24);
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v26 = v24 + 1;
        // v26 = .primitive
        v24 = v26;
    }
    let v34 = 0;
    let v37 = 0;
    const v38 = v37 + 1;
    // v38 = .primitive
    v37 = v38;
    let v41 = 0;
    const v45 = v34 + 1;
    // v45 = .primitive
    v34 = v45;
}
let v52 = 0;
for (let v56 = 0; v56 < 100; v56++) {
    const v57 = v0();
    // v57 = .unknown
}
}
%NeverOptimizeFunction(main);
main();