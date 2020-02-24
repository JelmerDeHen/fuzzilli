function main() {
const v5 = {e:13.37,d:"d"};
// v5 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "d"])
function v6(v7,v8) {
    for (const v10 in "function") {
        let v14 = -128;
        while (v14 < 5) {
            const v15 = v5 === 0;
            // v15 = .boolean
            const v16 = v14 + 1;
            // v16 = .primitive
            const v17 = v15 && v16;
            // v17 = .boolean
            const v18 = -128 & v17;
            // v18 = .integer
            v14 = v16;
            let v19 = 128;
            delete v18[v19];
        }
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v22 = v21;
const v23 = v6(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
