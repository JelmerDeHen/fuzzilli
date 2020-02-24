function main() {
const v7 = {e:1.0,b:"d"};
// v7 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "e"])
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
// v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v23 = v22;
const v24 = v8(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
