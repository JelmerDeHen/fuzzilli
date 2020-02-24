function main() {
const v1 = (1805143900).__proto__;
// v1 = .unknown
function v2(v3,v4) {
    for (const v6 in "boolean") {
        let v9 = 0;
        do {
            let v13 = 0;
            let v16 = -2833459799;
            while (v16 < 0) {
                const v17 = ~v16;
                // v17 = .boolean
                v16 = v17;
            }
            do {
                const v18 = v13 + 1;
                // v18 = .primitive
                v13 = v18;
            } while (v13 < 7);
            const v19 = v9 + 1;
            // v19 = .primitive
            v9 = v19;
        } while (v9 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v22 = v21;
const v23 = v2(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
