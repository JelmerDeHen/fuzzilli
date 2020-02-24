function main() {
const v2 = {e:13.37,d:"d"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "d", "e"])
function v3(v4,v5) {
    let v9 = -128;
    while (v9 < 5) {
        const v10 = v2 === 0;
        // v10 = .boolean
        const v11 = v9 + 1;
        // v11 = .primitive
        const v12 = v10 % v11;
        // v12 = .number
        const v13 = -128 + v12;
        // v13 = .primitive
        v9 = v11;
    }
}
const v15 = [1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v16 = v15;
const v17 = v3(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
