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
        const v12 = v10 << v11;
        // v12 = .integer
        const v13 = -128 + v12;
        // v13 = .primitive
        v9 = v11;
        let v14 = v12;
        delete v13[v14];
    }
}
const v16 = [1337];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v17 = v16;
const v18 = v3(v17);
// v18 = .unknown
const v19 = v3();
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
