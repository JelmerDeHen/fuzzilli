function main() {
const v3 = [13.37];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = {d:v3,e:-256,c:13.37};
// v4 = .object(ofGroup: Object, withProperties: ["e", "d", "c", "__proto__"])
let v5 = "unscopable";
let v8 = 0;
let v11 = 0;
const v12 = v8 + 1;
// v12 = .primitive
v8 = v12;
const v14 = [1337,1337];
// v14 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v16 = [1337,1337,1337];
// v16 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v17(v18,v19) {
    let v22 = 0;
    let v25 = 0;
    const v26 = v25 + 1;
    // v26 = .primitive
    v25 = v26;
    const v27 = v22 + 1;
    // v27 = .primitive
    const v31 = new Int16Array(19873);
    // v31 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "length", "byteLength", "byteOffset", "constructor"], withMethods: ["keys", "reduce", "indexOf", "map", "set", "join", "slice", "reduceRight", "lastIndexOf", "entries", "values", "reverse", "sort", "find", "findIndex", "forEach", "every", "some", "copyWithin", "fill", "includes", "subarray", "filter"])
    let v34 = "object";
    function v35(v36,v37,v38,v39,...v40) {
        for (const v41 in v40) {
            const v42 = v16.flatMap(v18,v41);
            // v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
            const v43 = v35(v31,...v42,v34,v27,...v4);
            // v43 = .unknown
        }
    }
    const v47 = [1337,1337];
    // v47 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v48 = {b:13.37,d:1607264097,e:1607264097,constructor:v47,valueOf:WeakSet};
    // v48 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "b", "constructor", "d", "e"])
    const v52 = [1337,1337];
    // v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v53 = {b:455742.6896635834,d:1607264097,e:1607264097,constructor:v52,valueOf:WeakSet};
    // v53 = .object(ofGroup: Object, withProperties: ["valueOf", "d", "b", "constructor", "e", "__proto__"])
    for (const v54 of v31) {
    }
    v5 = v27;
}
const v56 = [1337];
// v56 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v57 = v56;
const v58 = v17(v57);
// v58 = .unknown
const v59 = v17();
// v59 = .unknown
const v60 = v17(v58);
// v60 = .unknown
}
%NeverOptimizeFunction(main);
main();
