function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v7 = [v4,v6,Uint16Array];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v8 = {b:v6,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v8 = .object(ofGroup: Object, withProperties: ["length", "__proto__", "b", "a", "e", "valueOf"])
const v9 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__", "b", "toString", "d"])
let v10 = v4;
const v12 = 4294967297 || 4294967297;
// v12 = .boolean
let v15 = 0;
do {
    function v16(v17,v18,v19,v20,v21) {
        const v22 = {set:v20,ownKeys:v16,get:v16,defineProperty:v16,isExtensible:v18,apply:v19,construct:v18,getOwnPropertyDescriptor:v17,deleteProperty:v16,setPrototypeOf:v21,preventExtensions:v21};
        // v22 = .object(ofGroup: Object, withProperties: ["apply", "__proto__", "setPrototypeOf", "set", "construct", "preventExtensions", "getOwnPropertyDescriptor", "isExtensible"], withMethods: ["ownKeys", "defineProperty", "get", "deleteProperty"])
        const v24 = new Proxy(v20,v22);
        // v24 = .unknown
        return v24;
    }
    const v25 = v15 + 1;
    // v25 = .primitive
    v15 = v25;
} while (v15 < 7);
const v26 = !0;
// v26 = .boolean
const v30 = [13.37,13.37,13.37,13.37,13.37];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v33 = [v30,v32,Uint16Array];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v34 = {b:v32,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v34 = .object(ofGroup: Object, withProperties: ["b", "valueOf", "e", "a", "length", "__proto__"])
const v35 = {b:1337,e:1337,toString:Uint16Array,d:Uint16Array};
// v35 = .object(ofGroup: Object, withProperties: ["d", "b", "__proto__", "toString", "e"])
let v36 = v30;
"iterator"[v32] = 7;
v34[-65537] = v36;
const v38 = Object();
// v38 = .object()
const v40 = [1337,1337,1337,1337];
// v40 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v41 = Object(Uint16Array,Object,1337);
// v41 = .object()
const v42 = v10 - v38;
// v42 = .number
v6[0] = v8;
const v43 = Object(Object,v32);
// v43 = .object()
}
%NeverOptimizeFunction(main);
main();
