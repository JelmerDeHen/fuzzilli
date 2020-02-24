function main() {
const v3 = [7,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v6(v7,v8) {
    const v10 = Reflect.get(v3,v7);
    // v10 = .unknown
    let v13 = 0;
    do {
        let v16 = 0;
        do {
            const v17 = v16 + 1;
            // v17 = .primitive
            v16 = v17;
        } while (v16 < 7);
        const v18 = v13 + 1;
        // v18 = .primitive
        v13 = v18;
    } while (v13 < 8);
    return 1337;
}
const v20 = [1337];
// v20 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v21 = v20;
const v22 = v6(v21);
// v22 = .unknown
const v23 = v6(1862007616,4.0);
// v23 = .unknown
const v24 = v6(v23,v21);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
