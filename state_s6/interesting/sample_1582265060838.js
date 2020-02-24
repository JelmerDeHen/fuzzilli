function main() {
let v7 = 0;
let v15 = 0;
let v18 = 0;
const v21 = 1337 == 13.37;
// v21 = .boolean
const v23 = Object();
// v23 = .object()
const v24 = [1337,1337];
// v24 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v25(v26,v27) {
    const v29 = [1337,1337,1337,1337];
    // v29 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
