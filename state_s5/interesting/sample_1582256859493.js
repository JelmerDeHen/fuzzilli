function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {constructor:13.37,b:"toStringTag"};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "constructor"])
const v9 = {length:"toStringTag",a:v7,d:-1050326348,b:-1050326348};
// v9 = .object(ofGroup: Object, withProperties: ["b", "length", "__proto__", "d", "a"])
let v10 = v7;
for (const v11 of v7) {
    const v12 = {apply:v11,preventExtensions:v11,call:v11};
    // v12 = .object(ofGroup: Object, withProperties: ["call", "preventExtensions", "apply", "__proto__"])
    const v14 = new Proxy(v11,v12);
    // v14 = .unknown
}
const v15 = {deleteProperty:v6};
// v15 = .object(ofGroup: Object, withProperties: ["__proto__", "deleteProperty"])
const v17 = new Proxy(v8,v15);
// v17 = .unknown
const v19 = [13.37,13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v20(v21,v22,v23,v24,v25) {
    const v26 = v10.length;
    // v26 = .integer
    return v20;
}
const v30 = new Float64Array(40437);
// v30 = .object(ofGroup: Float64Array, withProperties: ["buffer", "constructor", "byteOffset", "byteLength", "__proto__", "length"], withMethods: ["forEach", "fill", "subarray", "set", "reduce", "join", "slice", "includes", "lastIndexOf", "filter", "find", "reverse", "values", "map", "keys", "reduceRight", "copyWithin", "sort", "some", "indexOf", "entries", "findIndex", "every"])
const v36 = [1337,1337];
// v36 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v37 = {b:13.37,d:1607264097,e:1607264097,constructor:v36,valueOf:WeakSet};
// v37 = .object(ofGroup: Object, withProperties: ["d", "constructor", "valueOf", "__proto__", "b", "e"])
const v40 = 1607264097 || 1607264097;
// v40 = .boolean
const v43 = new Int8Array(21844);
// v43 = .object(ofGroup: Int8Array, withProperties: ["byteLength", "__proto__", "length", "buffer", "byteOffset", "constructor"], withMethods: ["join", "entries", "map", "reduceRight", "find", "lastIndexOf", "keys", "values", "fill", "reverse", "indexOf", "filter", "reduce", "includes", "some", "set", "findIndex", "copyWithin", "every", "subarray", "forEach", "slice", "sort"])
const v46 = [1337,1337];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v47 = {b:13.37,d:1607264097,e:1607264097,e:v46,valueOf:WeakSet};
// v47 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "valueOf", "d"])
let v50 = "number";
function v51(v52,v53) {
    const v56 = v53.name;
    // v56 = .unknown
    const v57 = v56.constructor;
    // v57 = .unknown
    let v61 = 0;
    let v62 = 1;
    const v63 = WeakSet - v52;
    // v63 = .number
    const v64 = v61 + 1;
    // v64 = .primitive
    const v65 = "object" >> v64;
    // v65 = .integer
}
}
%NeverOptimizeFunction(main);
main();
