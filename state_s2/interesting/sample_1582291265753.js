function main() {
const v3 = {e:13.37,d:"d"};
// v3 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "e"])
function v4(v5,v6) {
    for (const v8 in "boolean") {
        let v11 = 0;
        do {
            let v14 = 0;
            while (v14 < 5) {
                const v15 = v3 === 0;
                // v15 = .boolean
                const v16 = v14 + 1;
                // v16 = .primitive
                const v17 = v15 / v15;
                // v17 = .number
                const v18 = 0 & v17;
                // v18 = .integer
                v14 = v16;
                let v19 = 1337;
                delete v18[v19];
            }
            const v20 = v11 + 1;
            // v20 = .primitive
            v11 = v20;
        } while (v11 <= 8);
    }
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v23 = v22;
const v24 = v4(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();