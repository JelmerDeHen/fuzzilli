function main() {
const v1 = 4294967297 || 4294967297;
// v1 = .boolean
let v4 = 0;
do {
    function v5(v6,v7,v8,v9,v10) {
        const v11 = {set:v9,ownKeys:v5,get:v5,defineProperty:v5,isExtensible:v7,apply:v8,construct:v7,getOwnPropertyDescriptor:v6,deleteProperty:v5,setPrototypeOf:v10,preventExtensions:v10};
        // v11 = .object(ofGroup: Object, withProperties: ["set", "isExtensible", "getOwnPropertyDescriptor", "preventExtensions", "apply", "construct", "__proto__", "setPrototypeOf"], withMethods: ["deleteProperty", "get", "defineProperty", "ownKeys"])
        const v13 = new Proxy(v9,v11);
        // v13 = .unknown
    }
    const v14 = v4 + 1;
    // v14 = .primitive
    v4 = v14;
} while (v4 < 7);
const v15 = !0;
// v15 = .boolean
const v19 = [13.37,13.37,13.37,13.37,13.37];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v21 = [1337];
// v21 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v22 = [v19,v21,Uint16Array];
// v22 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v23 = {b:v21,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v23 = .object(ofGroup: Object, withProperties: ["__proto__", "e", "valueOf", "b", "length", "a"])
const v24 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v24 = .object(ofGroup: Object, withProperties: ["d", "e", "toString", "__proto__", "b"])
let v25 = v19;
"iterator"[v21] = 7;
v23[-65537] = v25;
const v27 = Object();
// v27 = .object()
}
%NeverOptimizeFunction(main);
main();
