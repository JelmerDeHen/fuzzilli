function main() {
let v1 = 0;
function v2(v3,v4) {
    const v6 = [1337];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v9 = 0;
    if (v4) {
    } else {
        const v10 = v2(v1,v6);
        // v10 = .unknown
    }
    const v11 = v9 + 1;
    // v11 = .primitive
    v9 = v11;
    const v18 = {b:837110821,d:RegExp,c:"xynJaNgkpr",a:1337,constructor:13.37};
    // v18 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "c", "b", "constructor"], withMethods: ["d"])
    let v19 = v18;
    for (const v21 in "boolean") {
        try {
            const v22 = v19.__proto__;
            // v22 = .object()
            v19 = v22;
        } catch(v27) {
        }
        for (let v33 = 0; v33 < 127; v33++) {
            const v34 = Array(1337);
            // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        }
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v37 = v36;
const v38 = v2(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
