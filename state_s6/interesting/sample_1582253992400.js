function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v7 = .object(ofGroup: Object, withProperties: ["e", "length", "b", "a", "valueOf", "__proto__"])
const v8 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v8 = .object(ofGroup: Object, withProperties: ["b", "__proto__", "toString", "e", "d"])
let v9 = v4;
const v19 = [13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
for (const v20 in "object") {
    const v21 = ~v19;
    // v21 = .boolean
    const v22 = Object(v21,v20,4294967297);
    // v22 = .object()
    const v24 = {set:Object,get:Object};
    // v24 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["set", "get"])
    const v26 = Object.defineProperty(v22,-2676874943,v24);
    // v26 = .undefined
}
const v34 = [13.37,13.37,13.37,13.37,13.37];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v44 = v9.find(Object,"iterator");
// v44 = .unknown
v34[1337] = 4294967297;
let v47 = 0;
do {
    function v48(v49,v50,v51,v52,v53) {
        const v54 = {set:v52,ownKeys:v48,get:v48,defineProperty:v48,isExtensible:v50,apply:v51,construct:v50,getOwnPropertyDescriptor:v49,deleteProperty:v48,setPrototypeOf:v53,preventExtensions:v53};
        // v54 = .object(ofGroup: Object, withProperties: ["construct", "apply", "set", "isExtensible", "setPrototypeOf", "__proto__", "getOwnPropertyDescriptor", "preventExtensions"], withMethods: ["deleteProperty", "ownKeys", "get", "defineProperty"])
    }
} while (v47 > 7);
}
%NeverOptimizeFunction(main);
main();
