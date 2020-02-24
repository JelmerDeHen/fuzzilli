function main() {
let v2 = 0;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v13 = {};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
        const v18 = [2153514987,13.37,13.37,13.37,v6];
        // v18 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
        const v20 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v18,__proto__:v11};
        // v20 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "length", "__proto__"])
        const v21 = {a:1337,toString:v13,constructor:"NEGATIVE_INFINITY",valueOf:v20,b:13.37,c:JSON,e:JSON};
        // v21 = .object(ofGroup: Object, withProperties: ["b", "toString", "constructor", "e", "__proto__", "valueOf", "a", "c"])
        const v23 = JSON.stringify(v21,Reflect,"name");
        // v23 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
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
