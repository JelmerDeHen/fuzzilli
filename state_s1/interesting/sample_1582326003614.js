function main() {
const v3 = {d:13.37,d:"__proto__"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
function v7(v8,v9) {
    let v13 = -65535;
    while (v13 < 5) {
        const v14 = v3 === 0;
        // v14 = .boolean
        const v15 = v13 + 1;
        // v15 = .primitive
        const v16 = v14 << v15;
        // v16 = .integer
        const v17 = -65535 & v16;
        // v17 = .integer
        v13 = v15;
        let v18 = -4277543386;
        delete v17[v18];
    }
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v21 = v20;
const v22 = v7(v21);
// v22 = .unknown
const v23 = v7();
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
