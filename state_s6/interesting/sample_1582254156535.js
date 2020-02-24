function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["a", "e", "__proto__", "length", "b", "valueOf"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["b", "e", "d", "__proto__", "toString"])
let v10 = v4;
const v15 = [13.37,13.37,13.37,13.37,13.37];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v17 = [1337];
// v17 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v18 = [v15,v17,Uint16Array];
// v18 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v20 = 0;
function v21(v22,v23,v24,v25,v26) {
    const v27 = {set:v25,ownKeys:v21,get:v21,defineProperty:v21,isExtensible:v23,apply:v24,construct:v23,getOwnPropertyDescriptor:v22,deleteProperty:v21,setPrototypeOf:v26,preventExtensions:v26};
    // v27 = .object(ofGroup: Object, withProperties: ["getOwnPropertyDescriptor", "apply", "__proto__", "set", "setPrototypeOf", "construct", "isExtensible", "preventExtensions"], withMethods: ["get", "ownKeys", "deleteProperty", "defineProperty"])
    return v26;
}
const v28 = v20 + 1;
// v28 = .primitive
v20 = v28;
let v32 = 0;
do {
    function v33(v34,v35,v36,v37,v38) {
        const v39 = {set:v37,ownKeys:v33,get:v33,defineProperty:v33,isExtensible:v35,apply:v36,construct:v35,getOwnPropertyDescriptor:v34,deleteProperty:v33,setPrototypeOf:v38,preventExtensions:v38};
        // v39 = .object(ofGroup: Object, withProperties: ["apply", "getOwnPropertyDescriptor", "construct", "preventExtensions", "__proto__", "isExtensible", "set", "setPrototypeOf"], withMethods: ["deleteProperty", "defineProperty", "ownKeys", "get"])
        return "iterator";
    }
    const v40 = v32 + 1;
    // v40 = .primitive
    v32 = v40;
} while (v32 < 7);
let v44 = 0;
do {
    function v45(v46,v47,v48,v49,v50) {
        const v51 = {set:v49,ownKeys:v45,get:v45,defineProperty:v45,isExtensible:v47,apply:v48,construct:v47,getOwnPropertyDescriptor:v46,deleteProperty:v45,setPrototypeOf:v50,preventExtensions:v50};
        // v51 = .object(ofGroup: Object, withProperties: ["isExtensible", "setPrototypeOf", "construct", "getOwnPropertyDescriptor", "preventExtensions", "set", "__proto__", "apply"], withMethods: ["ownKeys", "defineProperty", "get", "deleteProperty"])
        return v10;
    }
    const v53 = v44 + 1;
    // v53 = .primitive
    v44 = v53;
} while (v44 < 7);
delete "iterator".constructor;
let v58 = 0;
while (v58 < 2) {
    const v59 = ~13.37;
    // v59 = .boolean
    const v60 = v58 + 1;
    // v60 = .primitive
    v58 = v60;
}
const v62 = Symbol.split;
// v62 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
Object[v62] = v6;
v10.__proto__ = "iterator";
for (let v66 = 0; v66 < 3; v66++) {
    const v67 = v21();
    // v67 = .unknown
}
const v68 = Object();
// v68 = .object()
}
%NeverOptimizeFunction(main);
main();
