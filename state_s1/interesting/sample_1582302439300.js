function main() {
const v2 = {e:13.37,d:"d"};
// v2 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
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
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v17 = v16;
const v18 = v3(v17);
// v18 = .unknown
const v19 = v3();
// v19 = .unknown
}
%NeverOptimizeFunction(main);
main();
