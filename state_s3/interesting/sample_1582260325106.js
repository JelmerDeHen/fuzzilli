function main() {
const v5 = ["c",1337,3488870410];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = {__proto__:3488870410,length:"c",e:13.37,c:v5,d:Uint32Array};
// v6 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "e", "d", "c"])
function v7(v8,v9) {
    const v12 = {ownKeys:v9,preventExtensions:v9,defineProperty:v7,getPrototypeOf:v9,deleteProperty:v9,has:v7,set:v8,apply:v9};
    // v12 = .object(ofGroup: Object, withProperties: ["preventExtensions", "apply", "ownKeys", "getPrototypeOf", "__proto__", "deleteProperty", "set"], withMethods: ["has", "defineProperty"])
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
// v22 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v23 = v22;
const v24 = v7(v23);
// v24 = .unknown
}
%NeverOptimizeFunction(main);
main();
