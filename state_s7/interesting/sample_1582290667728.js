function main() {
function v1(v2,v3) {
    let v6 = 0;
    for (const v7 in "POSITIVE_INFINITY") {
        let v10 = 0;
        do {
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
            const v17 = [1337,1337];
            // v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v18 = {b:211640.8752132058,d:1607264097,e:1607264097,constructor:v17,valueOf:WeakSet};
            // v18 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "constructor", "e", "b"])
            const v22 = [1337,1337];
            // v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v23 = {b:13.37,d:1607264097,e:1607264097,constructor:v22,b:WeakSet};
            // v23 = .object(ofGroup: Object, withProperties: ["e", "b", "__proto__", "constructor", "d"])
        } while (v10 < 8);
    }
    const v24 = "POSITIVE_INFINITY" - 1;
    // v24 = .primitive
    v6 = v24;
    const v25 = v6 + "POSITIVE_INFINITY";
    // v25 = .primitive
    return v25;
}
const v28 = [1337];
// v28 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v29 = v28;
const v30 = v1(v29);
// v30 = .unknown
const v31 = v1(1024,4.0);
// v31 = .unknown
}
%NeverOptimizeFunction(main);
main();
