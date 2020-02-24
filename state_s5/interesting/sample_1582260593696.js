function main() {
function v0(v1,v2) {
    const v11 = 1337 != 13.37;
    // v11 = .boolean
    let v24 = 0;
    while (v24 < 3) {
        const v25 = Array(v24);
        // v25 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
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
