function main() {
const v3 = [13.37,13.37,13.37,13.37];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v5 = [1337,1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = [v5];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = {e:13.37,d:1337,valueOf:v6};
// v7 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "d", "e"])
const v8 = {toString:13.37,d:v3,e:DataView,length:v6,a:"toString"};
// v8 = .object(ofGroup: Object, withProperties: ["toString", "d", "length", "a", "__proto__", "e"])
let v9 = v5;
let v12 = eval;
const v15 = ["undefined",13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v17 = [13.37,13.37,13.37,13.37];
// v17 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v21 = [1337,1337,1337,1337];
// v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v22 = "object".constructor;
// v22 = .function()
const v25 = Array(127);
// v25 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v26 = 1337;
function v28(v29,v30,v31,v32) {
}
const v33 = v28(v26,Object,v22,v21);
// v33 = .unknown
const v36 = new Uint32Array(268435456);
// v36 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "byteLength", "length", "constructor", "byteOffset", "buffer"], withMethods: ["sort", "filter", "forEach", "set", "keys", "subarray", "reduceRight", "includes", "copyWithin", "reverse", "findIndex", "lastIndexOf", "join", "entries", "map", "some", "slice", "fill", "indexOf", "every", "find", "reduce", "values"])
let v38 = undefined;
for (const v40 in "boolean") {
    let v43 = 0;
    const v45 = 13.37 - v25;
    // v45 = .number
    const v46 = "boolean".__proto__;
    // v46 = .object()
    let v48 = 0;
    const v49 = v48 + 1;
    // v49 = .primitive
    v48 = v49;
    for (const v50 in "boolean") {
    }
    const v53 = v43 + 1;
    // v53 = .primitive
    v43 = v53;
}
const v55 = {get:undefined};
// v55 = .object(ofGroup: Object, withProperties: ["get", "__proto__"])
const v59 = {constructor:"symbol",length:9007199254740993};
// v59 = .object(ofGroup: Object, withProperties: ["constructor", "length", "__proto__"])
delete v59.length;
let v64 = 0;
const v65 = v64 + 1;
// v65 = .primitive
v64 = v65;
const v66 = Object.defineProperty(v36,"__proto__",v55);
// v66 = .undefined
let v69 = 0;
const v70 = v69 + 1;
// v70 = .primitive
v69 = v70;
}
%NeverOptimizeFunction(main);
main();
