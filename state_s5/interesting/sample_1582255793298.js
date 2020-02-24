function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {constructor:v4,valueOf:Object,a:v6,e:v7};
// v8 = .object(ofGroup: Object, withProperties: ["constructor", "a", "e", "__proto__"], withMethods: ["valueOf"])
const v9 = {valueOf:1337};
// v9 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__"])
let v10 = 13.37;
const v15 = [13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v17 = [1337,1337,1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v18 = [13.37,v17];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v19 = {toString:v15,b:"PI",valueOf:v17};
// v19 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "valueOf", "toString"])
const v20 = {b:v19};
// v20 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
let v21 = v19;
let v24 = 1337;
function v26(v27,v28) {
    let v36 = 0;
    const v37 = {length:"N0Xx92zvHQ"};
    // v37 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v38 = {constructor:13.37,length:13.37,__proto__:v37,toString:Number,a:"N0Xx92zvHQ"};
    // v38 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "constructor"], withMethods: ["toString"])
    const v45 = "object".constructor;
    // v45 = .function()
    const v47 = {apply:v45,deleteProperty:gc,preventExtensions:Object,ownKeys:v45,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v47 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["isExtensible", "apply", "ownKeys", "has", "defineProperty", "preventExtensions", "getOwnPropertyDescriptor", "deleteProperty", "setPrototypeOf", "set", "construct"])
    const v49 = new Proxy(v38,v47);
    // v49 = .unknown
    const v50 = 100 == 13.37;
    // v50 = .boolean
    if (v49) {
    } else {
        const v51 = v24 && v24;
        // v51 = .boolean
    }
    let v54 = 0;
    do {
        const v57 = new Uint8ClampedArray(52889);
        // v57 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
        const v58 = v54 + 1;
        // v58 = .primitive
        v54 = v58;
    } while (v54 < 9);
    const v59 = Number.__proto__;
    // v59 = .unknown
    const v60 = 0 != v50;
    // v60 = .boolean
    return v37;
}
for (let v64 = 0; v64 < 100; v64++) {
    const v65 = v26();
    // v65 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
