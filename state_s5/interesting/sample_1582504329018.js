function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = [1337,13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v8 = {c:v6,toString:Symbol,b:"string"};
// v8 = .object(ofGroup: Object, withProperties: ["b", "c", "__proto__"], withMethods: ["toString"])
const v9 = {toString:5,valueOf:1337,c:v4};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf", "c", "toString"])
let v10 = v7;
function v11(v12,v13) {
    for (const v15 in "boolean") {
        let v18 = 0;
        do {
            const v19 = v11 + 1;
            // v19 = .primitive
            v18 = v19;
            const v22 = Symbol.toStringTag;
            // v22 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
            const v23 = Symbol[v22];
            // v23 = .unknown
            const v24 = {getPrototypeOf:v23,get:v23};
            // v24 = .object(ofGroup: Object, withProperties: ["__proto__", "getPrototypeOf", "get"])
            const v26 = new gc(eval,v24);
            // v26 = .object()
            this.valueOf = v26;
            const v29 = {preventExtensions:gc,get:gc,set:gc,apply:gc,getPrototypeOf:gc,ownKeys:gc,getOwnPropertyDescriptor:gc,construct:gc,defineProperty:gc,isExtensible:gc,deleteProperty:gc};
            // v29 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["deleteProperty", "isExtensible", "getPrototypeOf", "apply", "get", "getOwnPropertyDescriptor", "set", "preventExtensions", "ownKeys", "construct", "defineProperty"])
            const v31 = new ArrayBuffer(gc,v29);
            // v31 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
            v31.toString = valueOf;
        } while (v18 < 8);
    }
    return v12;
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v35 = v34;
const v36 = v11(v35);
// v36 = .unknown
const v37 = {has:v36,apply:Symbol,defineProperty:v11,getPrototypeOf:Symbol,call:v36,deleteProperty:v11,get:v36,getOwnPropertyDescriptor:v11,set:v36,ownKeys:v36,preventExtensions:Symbol,construct:Symbol};
// v37 = .object(ofGroup: Object, withProperties: ["__proto__", "ownKeys", "get", "call", "has", "set"], withMethods: ["defineProperty", "deleteProperty", "construct", "apply", "preventExtensions", "getOwnPropertyDescriptor", "getPrototypeOf"])
const v39 = new Proxy(v11,v37);
// v39 = .unknown
const v40 = typeof v36;
// v40 = .string
const v42 = v40 === "symbol";
// v42 = .boolean
for (let v46 = 0; v46 < 100; v46++) {
    const v47 = v11(v39,Symbol);
    // v47 = .unknown
}
"string"[9007199254740993] = 5;
const v48 = v11(Symbol,v36);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
