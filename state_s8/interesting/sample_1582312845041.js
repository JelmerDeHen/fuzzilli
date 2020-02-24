function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v4 = [-3583831853];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = {length:v4,e:DataView,valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "e", "length"])
let v7 = 0;
const v11 = [13.37];
// v11 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v18 = {};
        // v18 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v23 = [2153514987,13.37,13.37,13.37,v11];
        // v23 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
        const v25 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v23,__proto__:v16};
        // v25 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "__proto__"])
        const v26 = {e:1337,toString:v18,constructor:"NEGATIVE_INFINITY",valueOf:v25,b:13.37,c:JSON,e:JSON};
        // v26 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "c", "valueOf", "toString", "constructor", "e"])
        const v28 = JSON.stringify(v26,Reflect,"name");
        // v28 = .string + .object(ofGroup: String, withProperties: ["__proto__", "constructor", "length"], withMethods: ["charCodeAt", "includes", "split", "substring", "concat", "repeat", "slice", "charAt", "trim", "codePointAt", "indexOf", "padEnd", "padStart", "endsWith", "replace", "startsWith", "lastIndexOf"])
        v16[1024] = v16;
    } catch(v29) {
    }
}
const v30 = v12(v7,3,8,v11);
// v30 = .unknown
const v33 = ["constructor","constructor",1320432668,1320432668];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v34 = v33.__proto__;
// v34 = .object()
v34.constructor = 1320432668;
const v35 = v12(v5);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
