function main() {
function v1(v2,v3) {
    let v6 = 0;
    let v9 = 0;
    let v12 = 0;
    const v13 = v12 + 1;
    // v13 = .primitive
    v12 = v13;
    const v14 = v9 + 1;
    // v14 = .primitive
    v9 = v14;
    let v17 = -128;
    do {
        const v21 = Array(0);
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        v21[0] = 13.37;
        const v22 = v17 + 1;
        // v22 = .primitive
        v17 = v22;
    } while (v17 < -2);
    const v23 = v6 + 1;
    // v23 = .primitive
    v6 = v23;
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v25 = v24;
const v26 = v1(v25);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
