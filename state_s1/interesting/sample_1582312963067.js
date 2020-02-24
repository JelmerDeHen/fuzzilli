function main() {
const v3 = [1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v4 = [-3583831853];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v5 = {length:v4,e:DataView,valueOf:v3};
// v5 = .object(ofGroup: Object, withProperties: ["e", "valueOf", "__proto__", "length"])
let v7 = 0;
const v11 = [13.37];
// v11 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v12(v13,v14,v15,v16) {
    'use strict'
    try {
        const v18 = {};
        // v18 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v23 = [2153514987,13.37,13.37,13.37,v11];
        // v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
        const v25 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v23,__proto__:v16};
        // v25 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "valueOf"])
        const v26 = {e:1337,toString:v18,constructor:"NEGATIVE_INFINITY",valueOf:v25,b:13.37,c:JSON,e:JSON};
        // v26 = .object(ofGroup: Object, withProperties: ["valueOf", "toString", "__proto__", "e", "c", "b", "constructor"])
        const v28 = JSON.stringify(v26,Reflect,"name");
        // v28 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        v16[1024] = v16;
    } catch(v29) {
    }
}
const v30 = v12(v7,3,8,v11);
// v30 = .unknown
const v33 = ["constructor","constructor",1320432668,1320432668];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v34 = v33.__proto__;
// v34 = .object()
v34.constructor = 1320432668;
const v35 = v12(v5);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
