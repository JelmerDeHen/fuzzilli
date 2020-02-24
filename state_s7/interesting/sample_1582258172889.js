function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = {__proto__:4096,constructor:isFinite,a:v4,e:"match",d:4096};
// v5 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "a", "d"], withMethods: ["constructor"])
let v6 = v5;
function v7(v8,v9) {
    let v12 = 0;
    for (const v13 in "boolean") {
        let v15 = v12;
        if (v8) {
        } else {
            const v16 = v6.constructor(0);
            // v16 = .unknown
            v15 = v16;
        }
        const v17 = v15 >= 0;
        // v17 = .boolean
        let v19 = 0;
        do {
            let v22 = 0;
            do {
                const v23 = v22 + 1;
                // v23 = .primitive
                v22 = v23;
            } while (v22 < 7);
            const v24 = v19 + 1;
            // v24 = .primitive
            v19 = v24;
        } while (v19 < 8);
    }
}
const v26 = [1337];
// v26 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v27 = v26;
const v28 = v7(v27);
// v28 = .unknown
const v29 = v7();
// v29 = .unknown
}
%NeverOptimizeFunction(main);
main();
