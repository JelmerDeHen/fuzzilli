function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v2 = {valueOf:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
const v5 = {e:v2,d:"d"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
function v6(v7,v8) {
    let v12 = 0;
    while (v12 != 4096) {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    }
    let v16 = -128;
    const v17 = v5 <= 0;
    // v17 = .boolean
    const v18 = v16 + 1;
    // v18 = .primitive
    const v19 = v17 * v16;
    // v19 = .number
    const v20 = -128 & v19;
    // v20 = .integer
    v16 = v18;
    let v21 = 1337;
    delete v20[v21];
}
const v23 = [1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v24 = v23;
const v25 = v6(v24);
// v25 = .unknown
const v26 = v6(1337,v1);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
