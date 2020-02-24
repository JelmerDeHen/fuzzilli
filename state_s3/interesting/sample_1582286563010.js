function main() {
let v2 = 0;
const v6 = [13.37];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
function v7(v8,v9,v10,v11) {
    'use strict'
    try {
        const v13 = {};
        // v13 = .object(ofGroup: Object, withProperties: ["__proto__"])
        let v14 = v13;
        const v19 = [2153514987,13.37,13.37,13.37,v6];
        // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v21 = [v14,v19,v19];
        // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
        const v22 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v19,__proto__:v21};
        // v22 = .object(ofGroup: Object, withProperties: ["valueOf", "b", "__proto__", "length"])
        const v23 = {a:1337,toString:v13,constructor:"NEGATIVE_INFINITY",valueOf:v22,b:13.37,c:JSON,e:JSON};
        // v23 = .object(ofGroup: Object, withProperties: ["valueOf", "e", "a", "c", "b", "__proto__", "constructor", "toString"])
        const v25 = JSON.stringify(v23,Reflect,"name");
        // v25 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["indexOf", "padEnd", "replace", "charAt", "trim", "endsWith", "padStart", "charCodeAt", "codePointAt", "split", "includes", "startsWith", "repeat", "lastIndexOf", "concat", "substring", "slice"])
        v11[3] = v11;
    } catch(v26) {
    }
}
const v27 = v7(v2,3,8,v6);
// v27 = .unknown
const v28 = v7(1337);
// v28 = .unknown
}
%NeverOptimizeFunction(main);
main();
