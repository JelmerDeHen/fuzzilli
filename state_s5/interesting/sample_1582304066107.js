function main() {
const v3 = {e:13.37,d:"__proto__"};
// v3 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
function v4(v5,v6) {
    let v10 = -128;
    while (v10 < 5) {
        const v11 = v3 === 0;
        // v11 = .boolean
        const v12 = v10 + 1;
        // v12 = .primitive
        const v13 = v11 << v12;
        // v13 = .integer
        const v14 = -128 & v13;
        // v14 = .integer
        v10 = v12;
        let v15 = -4277543386;
        delete v14[v15];
    }
}
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v18 = v17;
const v19 = v4(v18);
// v19 = .unknown
const v20 = v4();
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
