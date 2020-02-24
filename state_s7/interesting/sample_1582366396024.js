function main() {
const v2 = [-1.7976931348623157e+308,-1.7976931348623157e+308];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v5 = [1597320083];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = {length:1337,a:v5,valueOf:v2,e:v4,d:1337,c:v4};
// v6 = .object(ofGroup: Object, withProperties: ["c", "d", "length", "__proto__", "valueOf", "e", "a"])
try {
    const v10 = [1337,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v11 = v10[1024];
    // v11 = .unknown
    const v12 = {isExtensible:ArrayBuffer,get:ArrayBuffer,set:v11,defineProperty:ArrayBuffer,call:ArrayBuffer,apply:v11,construct:v11,has:ArrayBuffer,ownKeys:v11,getPrototypeOf:ArrayBuffer};
    // v12 = .object(ofGroup: Object, withProperties: ["apply", "ownKeys", "getPrototypeOf", "isExtensible", "set", "has", "__proto__", "call", "construct", "get", "defineProperty"])
    const v14 = new Proxy(ArrayBuffer,v12);
    // v14 = .unknown
    const v15 = new v14(1597320083,v6);
    // v15 = .object()
} catch(v16) {
}
}
%NeverOptimizeFunction(main);
main();
