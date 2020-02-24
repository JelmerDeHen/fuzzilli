function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v2 = {valueOf:v1};
// v2 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
const v5 = {e:v2,d:"d"};
// v5 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v6(v7,v8) {
    let v12 = 0;
    while (v12 != 4096) {
        const v13 = v12 + 1;
        // v13 = .primitive
        v12 = v13;
    }
    let v15 = 4096;
    const v16 = v5 <= 0;
    // v16 = .boolean
    const v17 = v16 * v15;
    // v17 = .number
    const v18 = -128 & v17;
    // v18 = .integer
    let v19 = 1337;
    delete v18[v19];
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v22 = v21;
const v23 = v6(v22);
// v23 = .unknown
const v24 = v6(1337,v1);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
