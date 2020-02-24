function main() {
const v3 = {e:13.37,d:"d"};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v4(v5,v6) {
    for (const v8 in "function") {
        let v12 = -128;
        while (v12 < 5) {
            const v13 = v3 === 0;
            // v13 = .boolean
            const v14 = v12 + 1;
            // v14 = .primitive
            const v15 = v13 & v14;
            // v15 = .integer
            const v16 = -128 & v15;
            // v16 = .integer
            v12 = v14;
            let v17 = 1337;
            delete v16[v17];
        }
    }
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v20 = v19;
const v21 = v4(v20);
// v21 = .unknown
}
%NeverOptimizeFunction(main);
main();
