function main() {
function v1(v2,v3) {
    let v10 = 0;
    let v13 = 0;
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    const v28 = v13 + 1;
    // v28 = .primitive
    v13 = v28;
    const v29 = v10 + 1;
    // v29 = .primitive
    v10 = v29;
    const v37 = [1337];
    // v37 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    v37.d = 13.37;
    for (let v42 = 0; v42 < 100; v42++) {
        const v44 = [1337];
        // v44 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        let v45 = v44;
        let v47 = undefined;
        const v50 = [13.37,13.37,13.37,13.37];
        // v50 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        for (const v51 in v50) {
        }
    }
    const v52 = v37.push(13.37);
    // v52 = .integer
    const v56 = 1337 == 13.37;
    // v56 = .boolean
    const v58 = Object();
    // v58 = .object()
    let v61 = 0;
    const v62 = v61 + 1;
    // v62 = .primitive
    v61 = v62;
    let v65 = 0;
    const v66 = v65 + 1;
    // v66 = .primitive
    v65 = v66;
    let v69 = 0;
    const v70 = v69 + 1;
    // v70 = .primitive
    v69 = v70;
}
const v73 = [1337];
// v73 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v74 = v73;
const v75 = v1(v74);
// v75 = .unknown
const v76 = v1(1024,4.0);
// v76 = .unknown
let v80 = 0;
const v81 = gc();
// v81 = .undefined
}
%NeverOptimizeFunction(main);
main();
