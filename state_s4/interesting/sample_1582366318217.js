function main() {
const v2 = [-1.7976931348623157e+308,-1.7976931348623157e+308];
// v2 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v5 = [1597320083];
// v5 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v6 = {length:1337,a:v5,valueOf:v2,e:v4,d:1337,c:v4};
// v6 = .object(ofGroup: Object, withProperties: ["length", "d", "a", "e", "c", "__proto__", "valueOf"])
try {
    const v10 = [1337,13.37];
    // v10 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v11 = v10[1024];
    // v11 = .unknown
    const v12 = {isExtensible:ArrayBuffer,get:ArrayBuffer,set:v11,defineProperty:ArrayBuffer,call:ArrayBuffer,apply:v11,construct:v11,has:ArrayBuffer,ownKeys:v11,getPrototypeOf:ArrayBuffer};
    // v12 = .object(ofGroup: Object, withProperties: ["construct", "get", "has", "__proto__", "ownKeys", "set", "apply", "call", "isExtensible", "getPrototypeOf", "defineProperty"])
    const v14 = new Proxy(ArrayBuffer,v12);
    // v14 = .unknown
    const v15 = new v14(1597320083,v6);
    // v15 = .object()
} catch(v16) {
}
}
%NeverOptimizeFunction(main);
main();
