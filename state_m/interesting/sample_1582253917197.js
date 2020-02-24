function main() {
const v11 = {};
// v11 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v26 = [13.37,13.37];
// v26 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v28 = "string";
let v37 = 1337;
const v39 = new Int8Array(v37);
// v39 = .object(ofGroup: Int8Array, withProperties: ["constructor", "buffer", "__proto__", "length", "byteOffset", "byteLength"], withMethods: ["indexOf", "includes", "fill", "entries", "forEach", "reduceRight", "set", "values", "find", "slice", "map", "some", "copyWithin", "findIndex", "reverse", "keys", "filter", "subarray", "reduce", "join", "sort", "lastIndexOf", "every"])
function v46(v47,v48,v49,v50) {
}
const v57 = v11 > 13.37;
// v57 = .boolean
v39["string"] = Object;
let v60 = 0;
const v62 = v60 + 1;
// v62 = .primitive
v60 = v62;
let v65 = 0;
const v66 = v26 * 1337;
// v66 = .number
const v67 = v65 + 1;
// v67 = .primitive
v65 = v67;
const v68 = "string".includes(v60,1337);
// v68 = .boolean
const v69 = v46(v65,v28);
// v69 = .unknown
}
%NeverOptimizeFunction(main);
main();
