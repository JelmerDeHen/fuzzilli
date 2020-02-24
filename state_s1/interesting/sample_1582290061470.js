function main() {
let v1 = 0;
function v2(v3,v4) {
    const v6 = [1337];
    // v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
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
    // v18 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "c", "a", "b"], withMethods: ["d"])
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
            // v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        }
    }
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v37 = v36;
const v38 = v2(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
