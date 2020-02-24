function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [v6,v6,v6];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
v4.valueOf = "undefined";
v6[v6] = "undefined";
const v8 = v7[v7];
// v8 = .unknown
const v9 = v7[v4];
// v9 = .unknown
v7.d = v7;
const v10 = {d:"undefined",e:v4,__proto__:v6,c:v6,toString:v7};
// v10 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "d", "c", "e"])
const v11 = {b:13.37,d:1607264097,e:1607264097,constructor:v6,valueOf:WeakSet};
// v11 = .object(ofGroup: Object, withProperties: ["constructor", "__proto__", "valueOf", "e", "d", "b"])
let v12 = v10;
let v15 = "object";
do {
    const v16 = {deleteProperty:v9,defineProperty:v9,set:v9,getPrototypeOf:v8,has:v8,get:v9,isExtensible:v8,construct:v9};
    // v16 = .object(ofGroup: Object, withProperties: ["deleteProperty", "set", "__proto__", "get", "defineProperty", "getPrototypeOf", "construct", "isExtensible", "has"])
    const v18 = new Proxy(v11,v16);
    // v18 = .unknown
    let v21 = 0;
    const v22 = v21 + 1;
    // v22 = .primitive
    v21 = v22;
} while (v15 < 3);
}
%NeverOptimizeFunction(main);
main();
