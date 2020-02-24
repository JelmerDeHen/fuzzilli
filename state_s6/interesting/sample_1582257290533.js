function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = [1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = [13.37];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v8 = {d:v7,e:-256,c:13.37};
// v8 = .object(ofGroup: Object, withProperties: ["d", "c", "__proto__", "e"])
const v9 = {e:v6,length:v8,a:13.37,d:Boolean,toString:"unscopable",__proto__:v4};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "__proto__", "e", "length", "a"], withMethods: ["d"])
let v10 = "unscopable";
const v13 = {constructor:"symbol",length:9007199254740993};
// v13 = .object(ofGroup: Object, withProperties: ["length", "constructor", "__proto__"])
const v19 = [1337];
// v19 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v20 = v19;
let v22 = undefined;
let v29 = 0;
let v32 = 0;
const v33 = v32 + 1;
// v33 = .primitive
v32 = v33;
let v35 = 0;
const v39 = v29 + 1;
// v39 = .primitive
const v52 = [1337];
// v52 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v53 = {b:v52,e:Uint16Array,a:13.37,length:"iterator",valueOf:4294967297};
// v53 = .object(ofGroup: Object, withProperties: ["a", "valueOf", "e", "b", "length", "__proto__"])
let v56 = undefined;
const v59 = new Int32Array(16675);
// v59 = .object(ofGroup: Int32Array, withProperties: ["constructor", "buffer", "length", "__proto__", "byteLength", "byteOffset"], withMethods: ["findIndex", "sort", "fill", "every", "subarray", "lastIndexOf", "copyWithin", "indexOf", "reduce", "values", "find", "slice", "reduceRight", "reverse", "includes", "keys", "filter", "map", "some", "entries", "forEach", "set", "join"])
const v60 = v59.copyWithin(v56,8,v56);
// v60 = .undefined
const v64 = "object".constructor;
// v64 = .function()
for (const v65 in "object") {
    const v66 = {deleteProperty:gc,has:v64,toString:gc,construct:v64,setPrototypeOf:gc,getOwnPropertyDescriptor:gc,preventExtensions:gc,apply:gc,getPrototypeOf:v64,isExtensible:gc};
    // v66 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["setPrototypeOf", "getOwnPropertyDescriptor", "isExtensible", "preventExtensions", "apply", "deleteProperty", "construct", "getPrototypeOf", "has", "toString"])
    const v68 = new Proxy(v53,v66);
    // v68 = .unknown
    const v69 = {preventExtensions:gc,apply:gc,construct:v68,isExtensible:v68,deleteProperty:v68,a:gc};
    // v69 = .object(ofGroup: Object, withProperties: ["isExtensible", "__proto__", "deleteProperty", "construct"], withMethods: ["apply", "a", "preventExtensions"])
    v68[v69] = Uint16Array;
}
v29 = v39;
const v72 = Reflect.preventExtensions(v13);
// v72 = .boolean
v13[1337] = "object";
let v77 = 0;
while (v77 < 6) {
    let v78 = 0;
    try {
        let v79 = v78;
        v78 = 1;
    } catch(v80) {
        const v81 = v80();
        // v81 = .unknown
        v78 = v78;
    }
    const v82 = v77 + 1;
    // v82 = .primitive
    v77 = v82;
}
const v83 = (0)[v4];
// v83 = .unknown
const v84 = gc();
// v84 = .undefined
}
%NeverOptimizeFunction(main);
main();
