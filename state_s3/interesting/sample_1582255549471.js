function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v3 = [1337,v2,"e",v2];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {b:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
let v5 = "e";
let v8 = 0;
function v9(v10,v11) {
    let v15 = 0;
    v15 = "boolean";
    const v19 = new Int16Array(19873);
    // v19 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    const v23 = new Int16Array(19873);
    // v23 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
    function v25(v26,v27,v28,v29,...v30) {
        return v4;
    }
    const v31 = v25(1337);
    // v31 = .unknown
    const v35 = [1337,1337];
    // v35 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v36 = {b:13.37,d:1607264097,e:1607264097,constructor:v35,valueOf:WeakSet};
    // v36 = .object(ofGroup: Object, withProperties: ["constructor", "b", "d", "__proto__", "e", "valueOf"])
    for (const v37 of v23) {
    }
    const v43 = 3 / v3;
    // v43 = .number
    v36.valueOf = Object;
    const v44 = [1337,1337];
    // v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
    const v45 = {b:13.37,d:1607264097,e:1607264097,constructor:v44,valueOf:WeakSet};
    // v45 = .object(ofGroup: Object, withProperties: ["d", "e", "b", "__proto__", "valueOf", "constructor"])
    const v46 = v5[8];
    // v46 = .unknown
}
const v48 = [1337];
// v48 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v49 = v48;
let v52 = 0;
const v53 = v52 + 1;
// v53 = .primitive
v52 = v53;
const v54 = v9(v49);
// v54 = .unknown
const v55 = v9();
// v55 = .unknown
const v56 = v9();
// v56 = .unknown
}
%NeverOptimizeFunction(main);
main();
