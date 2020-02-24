function main() {
const v5 = ["c",1337,3488870410];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = {__proto__:3488870410,length:"c",e:13.37,c:v5,d:Uint32Array};
// v6 = .object(ofGroup: Object, withProperties: ["e", "d", "length", "__proto__", "c"])
function v7(v8,v9) {
    const v12 = {ownKeys:v9,preventExtensions:v9,defineProperty:v7,getPrototypeOf:v9,deleteProperty:v9,has:v7,set:v8,apply:v9};
    // v12 = .object(ofGroup: Object, withProperties: ["set", "apply", "getPrototypeOf", "__proto__", "deleteProperty", "preventExtensions", "ownKeys"], withMethods: ["has", "defineProperty"])
    const v14 = new Proxy(v7,v12);
    // v14 = .unknown
    const v15 = {toString:0,...Proxy,...v7,...v14};
    // v15 = .object(ofGroup: Object, withProperties: ["toString", "__proto__"])
    let v18 = 0;
    const v20 = v18 + 1;
    // v20 = .primitive
    v18 = v20;
}
const v22 = [1337];
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v23 = v22;
const v24 = v7(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
