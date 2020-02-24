function main() {
const v2 = {e:13.37,d:"d"};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "d"])
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
            let v17 = 0;
            v17 = v4;
            let v20 = 0;
            while (v20 < 5) {
                const v21 = v2 < 0;
                // v21 = .boolean
                const v22 = v20 + 1;
                // v22 = .primitive
                const v23 = v21 + v22;
                // v23 = .primitive
                const v24 = {constructor:v3};
                // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["constructor"])
                const v25 = 0 & v23;
                // v25 = .integer
                v20 = v22;
            }
            const v26 = v10 + 1;
            // v26 = .primitive
            v10 = v26;
        } while (v10 < 8);
    }
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v29 = v28;
const v30 = v3(v29);
// v30 = .unknown
}
%NeverOptimizeFunction(main);
main();
