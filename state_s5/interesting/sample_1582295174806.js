function main() {
let v2 = 0;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v13 = {};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v18 = [2153514987,13.37,13.37,13.37,v6];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
        const v20 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v18,__proto__:v11};
        // v20 = .object(ofGroup: Object, withProperties: ["__proto__", "length", "b", "valueOf"])
        const v21 = {a:1337,toString:v13,constructor:"NEGATIVE_INFINITY",valueOf:v20,b:13.37,c:JSON,e:JSON};
        // v21 = .object(ofGroup: Object, withProperties: ["constructor", "e", "toString", "__proto__", "valueOf", "c", "b", "a"])
        const v23 = JSON.stringify(v21,Reflect,"name");
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["replace", "padStart", "charCodeAt", "repeat", "indexOf", "trim", "lastIndexOf", "padEnd", "concat", "split", "startsWith", "codePointAt", "endsWith", "charAt", "slice", "substring", "includes"])
        v11[3] = v21;
    } catch(v24) {
    }
}
const v25 = v7(v2,3,8,v6);
// v25 = .unknown
const v26 = v7(1337);
// v26 = .unknown
}
%NeverOptimizeFunction(main);
main();
