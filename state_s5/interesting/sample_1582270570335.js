function main() {
function v1(v2,v3) {
    function v9(v10,v11,v12,v13) {
    }
    let v16 = 0;
    const v17 = v16 + 1;
    // v17 = .primitive
    v16 = v17;
    const v18 = Array.prototype;
    // v18 = .object()
    const v19 = v9 >> 13.37;
    // v19 = .integer
    const v20 = [13.37,13.37,13.37];
    // v20 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v22 = [1337,1337,1337,1337];
    // v22 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v23 = [];
    // v23 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v24 = {a:-4294967297,valueOf:"function",b:1337,length:v22,d:13.37};
    // v24 = .object(ofGroup: Object, withProperties: ["a", "d", "__proto__", "valueOf", "length", "b"])
    const v25 = {a:"function",c:v23};
    // v25 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "c"])
    let v26 = "function";
    let v30 = 0;
    const v31 = v20 + 1;
    // v31 = .primitive
    function v32(v33,v34) {
        const v35 = v33 in v32;
        // v35 = .boolean
        let v47 = 0;
        let v50 = 0;
    }
    v30 = v31;
    const v53 = new Int16Array(19873);
    // v53 = .object(ofGroup: Int16Array, withProperties: ["length", "byteLength", "__proto__", "byteOffset", "constructor", "buffer"], withMethods: ["lastIndexOf", "fill", "join", "reduce", "some", "findIndex", "entries", "map", "slice", "reverse", "sort", "set", "indexOf", "find", "copyWithin", "subarray", "includes", "values", "keys", "filter", "forEach", "every", "reduceRight"])
    const v57 = [1337,1337];
    // v57 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
    const v58 = {b:13.37,d:1607264097,e:1607264097,__proto__:v57,valueOf:WeakSet};
    // v58 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "__proto__", "d"])
    for (const v59 of v53) {
        const v60 = v58.b;
        // v60 = .unknown
    }
    return v2;
}
const v64 = new Set("asyncIterator");
// v64 = .object(ofGroup: Set, withProperties: ["size", "__proto__"], withMethods: ["has", "clear", "values", "delete", "add", "keys", "entries", "forEach"])
const v65 = v64.__proto__;
// v65 = .object()
let v67 = 0;
const v69 = ["symbol",...v64,v67];
// v69 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v70 = gc();
// v70 = .undefined
const v71 = [v1];
// v71 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v72 = v71;
const v73 = v1(v72);
// v73 = .unknown
const v74 = v1(v73,-0.0);
// v74 = .unknown
}
%NeverOptimizeFunction(main);
main();
