function main() {
let v1 = 0;
function v2(v3,v4) {
    const v7 = [1337];
    // v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    function v8(v9,v10) {
        let v13 = 0;
        Array.prototype = 1337;
        do {
            if (v4) {
            } else {
                const v16 = v2(v1,v7);
                // v16 = .unknown
            }
            const v17 = v13 + 1;
            // v17 = .primitive
            v13 = v17;
        } while (v13 < 9);
    }
    const v18 = v8();
    // v18 = .unknown
    for (const v19 in "boolean") {
        let v22 = 0;
        do {
            const v23 = v22 + 1;
            // v23 = .primitive
            v22 = v23;
            v3.valueOf = v3;
        } while (v22 < 7);
    }
    return v2;
}
const v25 = [1337];
// v25 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v26 = v25;
const v27 = v2(v26);
// v27 = .unknown
}
%NeverOptimizeFunction(main);
main();
