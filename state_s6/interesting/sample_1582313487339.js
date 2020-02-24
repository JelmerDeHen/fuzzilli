function main() {
const v3 = {valueOf:13.37,e:-92412138,toString:"0DeB1+Gn+W",__proto__:-92412138};
// v3 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "e", "toString"])
const v4 = v3.__proto__;
// v4 = .object()
const v7 = [1337,1337,1337,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
function v8(v9,v10,v11,v12) {
    'use strict'
    delete v4.constructor;
    try {
        let v15 = 0;
        const v19 = [13.37];
        // v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
        function v20(v21,v22,v23,v24) {
            'use strict'
            const v26 = {};
            // v26 = .object(ofGroup: Object, withProperties: ["__proto__"])
            const v31 = [2153514987,13.37,13.37,13.37,v19];
            // v31 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
            const v33 = {length:13.37,b:"NEGATIVE_INFINITY",valueOf:v31,__proto__:v24};
            // v33 = .object(ofGroup: Object, withProperties: ["valueOf", "__proto__", "b", "length"])
            const v34 = {a:1337,toString:v26,constructor:"NEGATIVE_INFINITY",valueOf:v33,b:13.37,c:JSON,e:JSON};
            // v34 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "toString", "b", "c", "constructor", "valueOf", "a"])
            const v36 = JSON.stringify(v34,Reflect,"name");
            // v36 = .string + .object(ofGroup: String, withProperties: ["constructor", "__proto__", "length"], withMethods: ["slice", "concat", "replace", "charCodeAt", "split", "trim", "startsWith", "includes", "indexOf", "charAt", "codePointAt", "repeat", "padStart", "lastIndexOf", "substring", "endsWith", "padEnd"])
            v24[3] = v34;
        }
        const v37 = v20(v15,3,8,v19);
        // v37 = .unknown
        const v38 = v20(1337);
        // v38 = .unknown
        let v41 = 0;
    } catch(v42) {
    }
}
const v43 = {deleteProperty:v8,set:v8,getPrototypeOf:v8,call:v8,preventExtensions:v8,isExtensible:v8,construct:v8,get:v8,ownKeys:v8,setPrototypeOf:v8,has:v8};
// v43 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "deleteProperty", "call", "ownKeys", "get", "isExtensible", "set", "has", "preventExtensions", "getPrototypeOf", "setPrototypeOf"])
const v45 = new Proxy(v7,v43);
// v45 = .unknown
v45[1] = "MIN_VALUE";
}
%NeverOptimizeFunction(main);
main();
