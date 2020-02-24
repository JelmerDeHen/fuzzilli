function main() {
const v2 = {e:13.37,d:"d"};
// v2 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
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
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v16 = v15;
const v17 = v3(v16);
// v17 = .unknown
}
%NeverOptimizeFunction(main);
main();
