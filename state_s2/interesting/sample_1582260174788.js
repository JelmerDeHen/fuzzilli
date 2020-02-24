function main() {
function v0(v1,v2) {
    for (const v4 in "boolean") {
        let v7 = 0;
        do {
            let v10 = 0;
            const v11 = v10 + 1;
            // v11 = .primitive
            v10 = v11;
            const v12 = v7 + 1;
            // v12 = .primitive
            v7 = v12;
        } while (v7 < 8);
    }
    const v16 = new Int16Array(19873);
    // v16 = .object(ofGroup: Int16Array, withProperties: ["buffer", "__proto__", "length", "byteLength", "constructor", "byteOffset"], withMethods: ["copyWithin", "fill", "reduce", "keys", "sort", "filter", "every", "reduceRight", "set", "subarray", "find", "includes", "indexOf", "forEach", "entries", "some", "lastIndexOf", "findIndex", "values", "reverse", "slice", "map", "join"])
    v16.valueOf = 1607264097;
    let v19 = "object";
    const v23 = [1337,1337];
    // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v24 = {b:13.37,d:1607264097,e:1607264097,constructor:v23,valueOf:WeakSet};
    // v24 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "constructor", "d", "__proto__"])
    for (const v25 of v16) {
    }
    let v29 = 0;
    const v30 = v29 + 1;
    // v30 = .primitive
    v29 = v30;
    const v31 = gc();
    // v31 = .undefined
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v34 = v33;
const v35 = v0(v34);
// v35 = .unknown
const v36 = v0();
// v36 = .unknown
const v38 = [1337,1337,1337,1337];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
}
%NeverOptimizeFunction(main);
main();
