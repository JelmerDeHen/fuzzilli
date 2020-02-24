function main() {
let v2 = 0;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v13 = {};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v18 = [2153514987,13.37,13.37,13.37,v6];
        // v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
        const v20 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v18,__proto__:v11};
        // v20 = .object(ofGroup: Object, withProperties: ["valueOf", "length", "__proto__", "b"])
        const v21 = {a:1337,toString:v13,constructor:"NEGATIVE_INFINITY",valueOf:v20,b:13.37,c:JSON,e:JSON};
        // v21 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "constructor", "b", "c", "a", "toString", "e"])
        const v23 = JSON.stringify(v21,Reflect,"name");
        // v23 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
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
