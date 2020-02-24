function main() {
const v2 = [7,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v5(v6,v7) {
    const v9 = Reflect.get(v2,v6);
    // v9 = .unknown
    let v12 = 0;
    do {
        let v15 = 0;
        do {
            const v16 = v15 + 1;
            // v16 = .primitive
            v15 = v16;
        } while (v15 < 7);
        const v17 = v12 + 1;
        // v17 = .primitive
        v12 = v17;
    } while (v12 < 8);
    return 8;
}
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v20 = v19;
const v21 = v5(v20);
// v21 = .unknown
const v22 = v5(1862007616,4.0);
// v22 = .unknown
const v23 = v5(v22,v20);
// v23 = .unknown
}
%NeverOptimizeFunction(main);
main();
