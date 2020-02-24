function main() {
const v4 = [13.37,13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [NaN];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {d:6,b:"byteOffset",length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "b", "d", "length"])
const v9 = {toString:"byteOffset",__proto__:v7,c:6,b:13.37,valueOf:v8};
// v9 = .object(ofGroup: Object, withProperties: ["c", "valueOf", "b", "__proto__", "toString"])
v9[6] = v9;
const v10 = v6.join("byteOffset");
// v10 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
const v11 = ~NaN;
// v11 = .boolean
const v12 = v6.join(v10);
// v12 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["startsWith", "repeat", "codePointAt", "charCodeAt", "padStart", "padEnd", "concat", "substring", "lastIndexOf", "split", "indexOf", "includes", "slice", "endsWith", "charAt", "trim", "replace"])
let v13 = v7;
const v17 = {length:13.37,a:gc,constructor:gc};
// v17 = .object(ofGroup: Object, withProperties: ["length", "__proto__"], withMethods: ["constructor", "a"])
let v18 = "object";
try {
    for (const v20 of v18) {
        const v22 = [1337,1337,1337];
        // v22 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    }
    const v23 = v8[-2814775822];
    // v23 = .unknown
    const v24 = v23.startsWith(v23);
    // v24 = .unknown
    const v27 = 371375.4036167406 in v17;
    // v27 = .boolean
    const v29 = [13.37,13.37];
    // v29 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
    const v30 = v18[1024];
    // v30 = .unknown
    const v32 = gc.toStringTag;
    // v32 = .unknown
    const v33 = {has:ArrayBuffer,construct:v30,defineProperty:v30,deleteProperty:ArrayBuffer,setPrototypeOf:ArrayBuffer,preventExtensions:v30,isExtensible:v30,call:v30,set:ArrayBuffer,getOwnPropertyDescriptor:ArrayBuffer};
    // v33 = .object(ofGroup: Object, withProperties: ["construct", "__proto__", "getOwnPropertyDescriptor", "call", "isExtensible", "defineProperty", "preventExtensions", "setPrototypeOf", "has", "deleteProperty", "set"])
    const v35 = new Proxy(v4,v33);
    // v35 = .unknown
    const v37 = Reflect.defineProperty(gc,v35,v32);
    // v37 = .boolean
} catch(v38) {
}
}
%NeverOptimizeFunction(main);
main();
