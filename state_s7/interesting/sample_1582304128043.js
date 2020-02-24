function main() {
const v3 = {c:13.37,d:"d"};
// v3 = .object(ofGroup: Object, withProperties: ["c", "__proto__", "d"])
function v4(v5,v6) {
    let v11 = -128;
    while (v11 < 5) {
        const v12 = v3 === 0;
        // v12 = .boolean
        const v13 = v11 + 1;
        // v13 = .primitive
        const v14 = v12 * v13;
        // v14 = .number
        const v15 = -128 / v14;
        // v15 = .number
        v11 = v13;
        let v16 = 1337;
        delete v15[v16];
    }
}
const v18 = [1337];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v19 = v18;
const v20 = v4(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
