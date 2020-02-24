function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [13.37,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {toString:v4,b:"PI",valueOf:v6};
// v8 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "toString", "__proto__"])
const v9 = {b:v8};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "b"])
let v10 = v8;
let v13 = 1337;
function v15(v16,v17) {
    let v25 = 0;
    const v26 = {length:"N0Xx92zvHQ"};
    // v26 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
    const v27 = {constructor:13.37,length:13.37,__proto__:v26,toString:Number,a:"N0Xx92zvHQ"};
    // v27 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__", "a"], withMethods: ["toString"])
    const v34 = "object".constructor;
    // v34 = .function()
    const v36 = {apply:v34,deleteProperty:gc,preventExtensions:Object,ownKeys:v34,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v36 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "has", "set", "ownKeys", "deleteProperty", "isExtensible", "defineProperty", "construct", "preventExtensions", "getOwnPropertyDescriptor", "apply"])
    const v38 = new Proxy(v27,v36);
    // v38 = .unknown
    const v39 = 100 == 13.37;
    // v39 = .boolean
    if (v38) {
    } else {
        const v40 = v13 && v13;
        // v40 = .boolean
    }
    let v43 = 0;
    do {
        const v46 = new Uint8ClampedArray(52889);
        // v46 = .object(ofGroup: Uint8ClampedArray, withProperties: ["buffer", "length", "byteLength", "constructor", "__proto__", "byteOffset"], withMethods: ["join", "values", "reduceRight", "find", "reverse", "fill", "indexOf", "entries", "forEach", "subarray", "findIndex", "every", "set", "reduce", "slice", "filter", "copyWithin", "keys", "lastIndexOf", "sort", "map", "some", "includes"])
        const v47 = v43 + 1;
        // v47 = .primitive
        v43 = v47;
    } while (v43 < 9);
    const v48 = Number.__proto__;
    // v48 = .unknown
    const v49 = 1383906163 != v39;
    // v49 = .boolean
    return v26;
}
for (let v53 = 0; v53 < 100; v53++) {
    const v54 = v15();
    // v54 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
