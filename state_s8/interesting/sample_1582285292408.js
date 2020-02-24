function main() {
const v9 = [13.37];
// v9 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v11 = [13.37,1000];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v12 = {b:1000,c:Infinity,__proto__:v9,length:v11,valueOf:v11};
// v12 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "length", "b", "c"])
const v13 = {b:v9,__proto__:v9,valueOf:"boolean",d:Infinity};
// v13 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "d", "__proto__"])
let v14 = v13;
const v16 = [-9007199254740992];
// v16 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
try {
    const v20 = {deleteProperty:Uint8ClampedArray,set:Uint8ClampedArray,apply:v12,defineProperty:Uint8ClampedArray,getOwnPropertyDescriptor:v11,setPrototypeOf:Uint8ClampedArray,has:Uint8ClampedArray,isExtensible:v13,getPrototypeOf:v16};
    // v20 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "deleteProperty", "__proto__", "set", "setPrototypeOf", "defineProperty", "isExtensible", "getPrototypeOf", "has", "apply"])
    const v22 = Proxy(v14,v20);
    // v22 = .unknown
    const v23 = v22(...v20,v20);
    // v23 = .unknown
    let v28 = 0;
    v28 = v28;
    let v29 = null;
    const v32 = Uint8ClampedArray(236809597);
    // v32 = .unknown
} catch(v33) {
}
}
%NeverOptimizeFunction(main);
main();
