function main() {
let v1 = "e";
function v3(v4,v5) {
    const v6 = v4 in v3;
    // v6 = .boolean
    let v8 = v4;
    const v12 = [1337,13.37];
    // v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v13 = {c:13.37};
    // v13 = .object(ofGroup: Object, withProperties: ["c", "__proto__"])
    const v14 = v12[65536];
    // v14 = .unknown
    let v17 = 0;
    do {
        const v18 = v17 + 1;
        // v18 = .primitive
        v17 = v18;
    } while (v17 < v8);
    const v19 = {__proto__:3,constructor:v17,d:v13,valueOf:v14,length:13.37};
    // v19 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "length", "constructor", "valueOf"])
    let v22 = 0;
    const v23 = v22 + 1;
    // v23 = .primitive
    v22 = v23;
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v27 = v26;
const v28 = v3(v27);
// v28 = .unknown
const v29 = v3(1024,4.0);
// v29 = .unknown
const v30 = v3(v1);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
