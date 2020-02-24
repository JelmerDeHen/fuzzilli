function main() {
let v5 = "string";
const v10 = [13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v12 = {};
// v12 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v17 = [13.37,13.37];
// v17 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v19 = v17[1024];
// v19 = .unknown
let v22 = 0;
do {
    v5.b = gc;
    const v23 = v19 >> v12;
    // v23 = .integer
    let v24 = "string";
    try {
    } catch(v25) {
        let v26 = v25;
        if (v19) {
            v5 = v10;
        } else {
        }
        v24 = v24;
    }
    if (v19) {
        break;
    } else {
        const v27 = v24 / v23;
        // v27 = .number
    }
    const v28 = v22 + 1;
    // v28 = .primitive
    v22 = v28;
} while (v22 < 3);
}
%NeverOptimizeFunction(main);
main();
