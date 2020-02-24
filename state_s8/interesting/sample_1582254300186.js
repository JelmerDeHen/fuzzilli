function main() {
const v5 = [1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [3156875969,3156875969,1337,DataView];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v7 = v5;
const v10 = {call:1337,setPrototypeOf:13.37,apply:1337,has:1337,getOwnPropertyDescriptor:DataView,get:DataView,preventExtensions:13.37,set:1337,construct:v6,getPrototypeOf:"boolean",deleteProperty:1337};
// v10 = .object(ofGroup: Object, withProperties: ["call", "get", "set", "getPrototypeOf", "__proto__", "getOwnPropertyDescriptor", "apply", "preventExtensions", "construct", "setPrototypeOf", "deleteProperty", "has"])
const v12 = new Proxy(v7,v10);
// v12 = .unknown
let v15 = 0;
do {
    const v18 = gc();
    // v18 = .undefined
    const v19 = v15 + 1;
    // v19 = .primitive
    v15 = v19;
} while (v15 < 3);
}
%NeverOptimizeFunction(main);
main();
