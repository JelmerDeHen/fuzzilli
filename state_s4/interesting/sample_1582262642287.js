function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = [13.37,"string",13.37];
// v7 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v8 = {valueOf:65536,toString:65536,d:v4};
// v8 = .object(ofGroup: Object, withProperties: ["d", "valueOf", "__proto__", "toString"])
const v9 = {a:v6,d:1337,toString:13.37,c:v7,valueOf:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["d", "toString", "a", "valueOf", "c", "__proto__"])
let v10 = v7;
const v12 = [1337,1337];
// v12 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
function v13(v14,v15) {
    const v17 = (13.37).search;
    // v17 = .unknown
    const v18 = v12[v17];
    // v18 = .unknown
    const v21 = new Int16Array(19873);
    // v21 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "buffer", "length", "byteLength", "__proto__", "constructor"], withMethods: ["reverse", "indexOf", "map", "reduceRight", "find", "reduce", "lastIndexOf", "keys", "entries", "values", "copyWithin", "every", "subarray", "fill", "some", "findIndex", "filter", "set", "slice", "join", "forEach", "includes", "sort"])
    for (const v22 of v21) {
    }
    return v9;
}
const v24 = [1337];
// v24 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v25 = v24;
const v26 = v13(v25);
// v26 = .unknown
const v27 = v13();
// v27 = .unknown
const v28 = v13();
// v28 = .unknown
const v29 = v13();
// v29 = .unknown
const v30 = v24.__proto__;
// v30 = .object()
const v31 = {construct:v26,getPrototypeOf:v27,get:v13,call:v27,getOwnPropertyDescriptor:isFinite,set:v29,isExtensible:v29,ownKeys:v28,setPrototypeOf:v27,has:v27,deleteProperty:isFinite,defineProperty:v29};
// v31 = .object(ofGroup: Object, withProperties: ["defineProperty", "set", "has", "isExtensible", "getPrototypeOf", "ownKeys", "call", "__proto__", "setPrototypeOf", "construct"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "get"])
const v33 = new Proxy(v29,v31);
// v33 = .unknown
const v34 = v6 in v9;
// v34 = .boolean
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v37 = v13(1337,v7);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
