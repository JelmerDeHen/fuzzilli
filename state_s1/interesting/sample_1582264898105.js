function main() {
let v7 = 0;
let v15 = 0;
let v18 = 0;
const v21 = 1337 == 13.37;
// v21 = .boolean
const v23 = Object();
// v23 = .object()
const v24 = [1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v25(v26,v27) {
    const v29 = [1337,1337,1337,1337];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    let v30 = v29;
    const v31 = v30 + 1;
    // v31 = .primitive
    const v33 = Math.asin(v31);
    // v33 = .number
    return v33;
}
for (let v37 = 0; v37 < 100; v37++) {
    const v38 = v25(v24);
    // v38 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
