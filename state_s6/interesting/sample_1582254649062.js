function main() {
const v1 = typeof 4294967297;
// v1 = .string
const v3 = v1 === "string";
// v3 = .boolean
const v4 = "string"[10000];
// v4 = .unknown
const v5 = 4294967297 - 1;
// v5 = .primitive
"string".length = "string";
const v6 = v3 & v3;
// v6 = .integer
const v10 = [13.37,13.37,13.37,13.37,13.37];
// v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v12 = [1337];
// v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v13 = [v10,v12,Uint16Array];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v14 = {b:v12,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v14 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "e", "valueOf", "a"])
const v15 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v15 = .object(ofGroup: Object, withProperties: ["toString", "e", "d", "b", "__proto__"])
let v16 = v10;
const v18 = 4294967297 || 4294967297;
// v18 = .boolean
let v21 = 0;
do {
    function v22(v23,v24,v25,v26,v27) {
        const v28 = {set:v26,ownKeys:v22,get:v22,defineProperty:v22,isExtensible:v24,apply:v25,construct:v24,getOwnPropertyDescriptor:v23,deleteProperty:v22,setPrototypeOf:v27,preventExtensions:v27};
        // v28 = .object(ofGroup: Object, withProperties: ["set", "getOwnPropertyDescriptor", "isExtensible", "preventExtensions", "apply", "construct", "__proto__", "setPrototypeOf"], withMethods: ["ownKeys", "deleteProperty", "get", "defineProperty"])
        const v30 = new Proxy(v26,v28);
        // v30 = .unknown
        const v33 = new Float64Array(61633);
        // v33 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
        v15.toString = v26;
        const v34 = Uint16Array - v14;
        // v34 = .number
        return v15;
    }
    const v35 = v21 + 1;
    // v35 = .primitive
    v21 = v35;
} while (v21 < 7);
const v36 = !0;
// v36 = .boolean
const v40 = [13.37,13.37,13.37,13.37,13.37];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v46 = [13.37,13.37,13.37,13.37,13.37];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v48 = [1337];
// v48 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v49 = [v46,v48,Uint16Array];
// v49 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v50 = {b:v48,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v50 = .object(ofGroup: Object, withProperties: ["a", "e", "length", "b", "__proto__", "valueOf"])
const v51 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v51 = .object(ofGroup: Object, withProperties: ["b", "d", "__proto__", "e", "toString"])
let v52 = v46;
v50[v48] = v52;
const v57 = [13.37,13.37,Uint16Array,13.37,13.37];
// v57 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v59 = [1337];
// v59 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v60 = {b:v59,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v60 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "b", "__proto__", "length", "a"])
let v61 = v57;
const v65 = [1337,1337,1337,v52];
// v65 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v66 = "object".constructor;
// v66 = .function()
v57.constructor = "iterator";
const v67 = typeof 4294967297;
// v67 = .string
const v69 = v67 === "object";
// v69 = .boolean
const v71 = {set:v66,get:v66};
// v71 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
const v73 = Object.defineProperty(v61,2794983832,v71);
// v73 = .undefined
const v74 = {defineProperty:v66,setPrototypeOf:gc,isExtensible:gc,getOwnPropertyDescriptor:v66,deleteProperty:Object,set:v66};
// v74 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "defineProperty", "set", "setPrototypeOf", "isExtensible"])
const v76 = new Proxy(v60,v74);
// v76 = .unknown
const v77 = v65 + 1;
// v77 = .primitive
let v78 = 1337;
const v81 = [13.37,13.37,13.37,13.37,13.37];
// v81 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v83 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v83 = .object(ofGroup: Object, withProperties: ["b", "e", "__proto__", "toString", "d"])
let v84 = v81;
v83[v84] = 13.37;
const v93 = {constructor:v61,__proto__:13.37,...v59,...v78};
// v93 = .object(ofGroup: Object, withProperties: ["__proto__", "constructor", "length"], withMethods: ["sort", "includes", "shift", "reverse", "values", "lastIndexOf", "flat", "toString", "filter", "keys", "splice", "pop", "flatMap", "reduceRight", "indexOf", "some", "copyWithin", "join", "find", "unshift", "map", "entries", "push", "forEach", "findIndex", "slice", "fill", "toLocaleString", "concat", "every", "reduce"])
const v94 = {defineProperty:Object,ownKeys:gc,get:v66,has:v66,isExtensible:Object};
// v94 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["ownKeys", "isExtensible", "get", "has", "defineProperty"])
const v96 = new Proxy(v60,v94);
// v96 = .unknown
const v97 = gc();
// v97 = .undefined
const v98 = [1337];
// v98 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v99 = [v40,v98,Uint16Array];
// v99 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v100 = {b:v98,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v100 = .object(ofGroup: Object, withProperties: ["e", "length", "b", "__proto__", "a", "valueOf"])
const v101 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v101 = .object(ofGroup: Object, withProperties: ["toString", "d", "__proto__", "b", "e"])
let v102 = v40;
"iterator"[v98] = 7;
v100[-65537] = v102;
const v106 = new Float64Array(9419);
// v106 = .object(ofGroup: Float64Array, withProperties: ["constructor", "length", "buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["map", "set", "filter", "sort", "findIndex", "forEach", "some", "copyWithin", "keys", "subarray", "join", "every", "find", "entries", "indexOf", "reduce", "values", "reverse", "reduceRight", "lastIndexOf", "fill", "slice", "includes"])
const v107 = Object();
// v107 = .object()
const v108 = [v96,4294967297,v48];
// v108 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v109 = 4294967297 / v106;
// v109 = .number
let v110 = 13.37;
if (v36) {
    let v111 = v4;
    v110 = "iterator";
} else {
    v110 = Math;
}
v46.__proto__ = 2;
v14.constructor = 1337;
const v113 = v66(7,v57,0);
// v113 = .unknown
}
%NeverOptimizeFunction(main);
main();
