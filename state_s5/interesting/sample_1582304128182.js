function main() {
const v3 = {c:13.37,d:"d"};
// v3 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "c"])
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
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v19 = v18;
const v20 = v4(v19);
// v20 = .unknown
}
%NeverOptimizeFunction(main);
main();
