function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["b", "length", "valueOf", "__proto__", "a", "e"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "toString", "d", "b"])
let v10 = v4;
let v14 = 0;
do {
    function v15(v16,v17,v18,v19,v20) {
        const v21 = {set:v19,ownKeys:v15,get:v15,defineProperty:v15,isExtensible:v17,apply:v18,construct:v17,getOwnPropertyDescriptor:v16,deleteProperty:v15,setPrototypeOf:v20,preventExtensions:v20};
        // v21 = .object(ofGroup: Object, withProperties: ["setPrototypeOf", "getOwnPropertyDescriptor", "isExtensible", "preventExtensions", "apply", "construct", "__proto__", "set"], withMethods: ["get", "deleteProperty", "defineProperty", "ownKeys"])
    }
    const v23 = v14 + 1;
    // v23 = .primitive
    v14 = v23;
} while (v14 < 7);
}
%NeverOptimizeFunction(main);
main();
