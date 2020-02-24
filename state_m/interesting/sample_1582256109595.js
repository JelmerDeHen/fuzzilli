function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v7 = "match";
const v8 = typeof 4096;
// v8 = .string
const v10 = v8 === "function";
// v10 = .boolean
let v11 = v4;
v11 = v7;
const v12 = {__proto__:4096,constructor:isFinite,a:v4,e:"match",d:4096};
// v12 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "d"], withMethods: ["constructor"])
let v13 = v12;
function v14(v15,v16) {
    let v20 = 0;
    for (const v21 in "boolean") {
        let v23 = v20;
        if (v15) {
            const v24 = Number.MIN_VALUE;
            // v24 = .number
            v23 = v24;
        } else {
            const v25 = v13.constructor(1337);
            // v25 = .unknown
            v23 = v25;
        }
        const v26 = v23 >= 0;
        // v26 = .boolean
        v12[v11] = v26;
        let v28 = 0;
        do {
            let v31 = 0;
            do {
                const v32 = v31 + 1;
                // v32 = .primitive
                v31 = v32;
            } while (v31 < 7);
            const v33 = v28 + 1;
            // v33 = .primitive
            v28 = v33;
        } while (v28 < 8);
    }
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v36 = v35;
const v37 = v14(v36);
// v37 = .unknown
const v38 = v14();
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
