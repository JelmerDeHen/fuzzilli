function main() {
function v1(v2,v3) {
    for (const v5 in "undefined") {
        let v8 = 0;
        do {
            const v10 = "undefined" % 13.37;
            // v10 = .number
            let v13 = 0;
            delete v10[-268435456];
            const v14 = v13 + 1;
            // v14 = .primitive
            v13 = v14;
            const v15 = v8 + 1;
            // v15 = .primitive
            v8 = v15;
        } while (v8 < 8);
        let v18 = 0;
        do {
            const v19 = v18 + 1;
            // v19 = .primitive
            v18 = v19;
        } while (v18 < 8);
    }
}
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v22 = v21;
const v23 = v1(v22);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
