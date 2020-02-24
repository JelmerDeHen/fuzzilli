function main() {
const v4 = [13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v7 = [13.37,13.37,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v8 = {b:13.37,valueOf:v4,c:v6,a:Reflect,__proto__:v7,length:Reflect,toString:1337};
// v8 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "b", "toString", "__proto__", "c", "length"])
const v9 = {a:v7,length:Reflect,valueOf:v4,toString:v8};
// v9 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "toString", "a", "valueOf"])
let v10 = Reflect;
const v34 = {__proto__:536870912};
// v34 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v54 = [1337,1337,1337,1337,1337];
// v54 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v55(v56,v57,v58,v59) {
    'use strict'
    for (const v61 in "boolean") {
        const v63 = [v56,1337];
        // v63 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v64 = v63.shift();
        // v64 = .unknown
        const v65 = (1337).constructor;
        // v65 = .unknown
        const v66 = {set:v65,a:v65};
        // v66 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "set"])
        const v68 = Object.seal(v63,v61,v66);
        // v68 = .object()
        const v70 = Object.values(v63);
        // v70 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    }
}
const v71 = {deleteProperty:v55,set:v55,getPrototypeOf:v55,c:v55,preventExtensions:v55,isExtensible:v55,construct:v55,get:v55,ownKeys:v55,setPrototypeOf:v55,has:v55};
// v71 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["has", "get", "isExtensible", "setPrototypeOf", "getPrototypeOf", "c", "construct", "preventExtensions", "deleteProperty", "set", "ownKeys"])
const v73 = new Proxy(v54,v71);
// v73 = .unknown
v73[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
