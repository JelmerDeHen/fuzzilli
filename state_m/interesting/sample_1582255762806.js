function main() {
const v1 = [1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v2 = v1;
let v4 = undefined;
let v8 = 0;
const v9 = v8 + 1;
// v9 = .primitive
v8 = v9;
const v13 = new Int16Array(19873);
// v13 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
const v17 = new Int16Array(19873);
// v17 = .object(ofGroup: Int16Array, withProperties: ["constructor", "buffer", "byteLength", "__proto__", "byteOffset", "length"], withMethods: ["sort", "includes", "indexOf", "entries", "forEach", "filter", "keys", "values", "map", "reverse", "slice", "lastIndexOf", "fill", "join", "set", "every", "some", "copyWithin", "find", "reduce", "subarray", "reduceRight", "findIndex"])
const v21 = [1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v22 = {b:13.37,d:1607264097,e:1607264097,constructor:v21,valueOf:WeakSet};
// v22 = .object(ofGroup: Object, withProperties: ["b", "e", "constructor", "valueOf", "d", "__proto__"])
const v26 = [1337,1337];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v27 = {b:13.37,d:1607264097,e:1607264097,constructor:v26,valueOf:WeakSet};
// v27 = .object(ofGroup: Object, withProperties: ["e", "d", "b", "constructor", "valueOf", "__proto__"])
function v28(v29,v30) {
    let v41 = 0;
    for (const v42 in "boolean") {
        let v45 = 0;
        do {
            let v48 = 0;
            do {
                const v49 = v48 + 1;
                // v49 = .primitive
                const v50 = Number.isFinite(v49);
                // v50 = .boolean
                v48 = v49;
            } while (v48 < 7);
            let v56 = 0;
            const v60 = v45 + 1;
            // v60 = .primitive
            v45 = v60;
        } while (v45 < 8);
    }
    const v61 = v41 + 1;
    // v61 = .primitive
    v41 = v61;
}
const v64 = [1337];
// v64 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v65 = v64;
const v66 = v28(v65);
// v66 = .unknown
}
%NeverOptimizeFunction(main);
main();
