function main() {
const v7 = {e:1.0,b:"d"};
// v7 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__"])
function v8(v9,v10) {
    let v15 = -128;
    while (v15 < 5) {
        const v16 = v7 === 0;
        // v16 = .boolean
        const v17 = v15 + 1;
        // v17 = .primitive
        const v18 = v16 && v17;
        // v18 = .boolean
        const v19 = -128 / v18;
        // v19 = .number
        v15 = v17;
        let v20 = 128;
        delete v19[v20];
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v23 = v22;
const v24 = v8(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
