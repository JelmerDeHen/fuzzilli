function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = v3 + 1;
// v4 = .primitive
const v6 = [13.37,13.37,v4];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
v6[3673909156] = v4;
let v10 = 0;
function v18(v19,v20) {
    let v24 = 0;
    const v34 = 1337 == v19;
    // v34 = .boolean
    let v37 = 0;
    let v40 = 0;
}
function v42(v43,v44) {
    const v46 = {__proto__:536870912};
    // v46 = .object(ofGroup: Object, withProperties: ["__proto__"])
    with (v46) {
        __proto__[0] = v42;
    }
}
const v49 = v42(1024,4.0);
// v49 = .unknown
const v52 = [13.37,13.37,13.37,13.37];
// v52 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v56 = v6.includes("c",-2);
// v56 = .boolean
}
%NeverOptimizeFunction(main);
main();
