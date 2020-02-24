function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "a", "length", "b", "valueOf", "e"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["b", "toString", "d", "e", "__proto__"])
let v10 = v4;
const v12 = 4294967297 || 4294967297;
// v12 = .boolean
let v15 = 0;
do {
    function v16(v17,v18,v19,v20,v21) {
        const v22 = {set:v20,ownKeys:v16,get:v16,defineProperty:v16,isExtensible:v18,apply:v19,construct:v18,getOwnPropertyDescriptor:v17,deleteProperty:v16,setPrototypeOf:v21,preventExtensions:v21};
        // v22 = .object(ofGroup: Object, withProperties: ["set", "isExtensible", "getOwnPropertyDescriptor", "preventExtensions", "apply", "construct", "__proto__", "setPrototypeOf"], withMethods: ["get", "deleteProperty", "ownKeys", "defineProperty"])
        const v24 = new Proxy(v20,v22);
        // v24 = .unknown
    }
    const v25 = v15 + 1;
    // v25 = .primitive
    v15 = v25;
} while (v15 < 7);
const v26 = !0;
// v26 = .boolean
const v30 = [13.37,13.37,13.37,13.37,13.37];
// v30 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v33 = [v30,v32,Uint16Array];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v34 = {b:v32,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v34 = .object(ofGroup: Object, withProperties: ["valueOf", "a", "b", "__proto__", "e", "length"])
const v35 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v35 = .object(ofGroup: Object, withProperties: ["e", "b", "__proto__", "toString", "d"])
let v36 = v30;
"iterator"[v32] = 7;
v34[-65537] = v36;
const v38 = Object();
// v38 = .object()
const v39 = Object(13.37,4294967297,v7,v8,v35);
// v39 = .object()
const v40 = v30[v10];
// v40 = .unknown
const v41 = Object(v8,v10);
// v41 = .object()
}
%NeverOptimizeFunction(main);
main();
