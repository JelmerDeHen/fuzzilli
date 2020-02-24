function main() {
const v2 = (1805143900).__proto__;
// v2 = .unknown
function v3(v4,v5) {
    for (const v7 in "boolean") {
        let v10 = 0;
        do {
            let v13 = 0;
            let v16 = -2833459799;
            while (v16 < 0) {
                const v17 = ~v16;
                // v17 = .boolean
                v16 = v17;
            }
            if (v2) {
            } else {
            }
            const v18 = v13 + 1;
            // v18 = .primitive
            v2[8] = v16;
            v13 = v18;
            const v19 = v10 + 1;
            // v19 = .primitive
            v10 = v19;
        } while (v10 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v22 = v21;
const v23 = v3(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
