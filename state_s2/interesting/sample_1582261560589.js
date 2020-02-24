function main() {
const v4 = [13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = [1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = [v4,v4];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v8 = {length:v7};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__", "length"])
const v9 = {valueOf:"string"};
// v9 = .object(ofGroup: Object, withProperties: ["__proto__", "valueOf"])
let v10 = v7;
const v13 = [13.37];
// v13 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
function v14(v15,v16) {
    const v23 = {length:"N0Xx92zvHQ"};
    // v23 = .object(ofGroup: Object, withProperties: ["length", "__proto__"])
    const v24 = {constructor:13.37,length:13.37,__proto__:v23,toString:Number,a:"N0Xx92zvHQ"};
    // v24 = .object(ofGroup: Object, withProperties: ["a", "__proto__", "length", "constructor"], withMethods: ["toString"])
    const v27 = new Float32Array(57369);
    // v27 = .object(ofGroup: Float32Array, withProperties: ["byteLength", "length", "__proto__", "buffer", "constructor", "byteOffset"], withMethods: ["includes", "forEach", "findIndex", "lastIndexOf", "reduce", "filter", "some", "entries", "map", "slice", "every", "reverse", "keys", "reduceRight", "copyWithin", "set", "fill", "subarray", "join", "values", "sort", "indexOf", "find"])
    const v28 = v4 + 1;
    // v28 = .primitive
    function v29(v30,v31) {
        let v34 = 0;
        do {
            v4[v24] = v27;
            const v35 = v34 + 1;
            // v35 = .primitive
            v34 = v35;
        } while (v34 < 5);
        return 5;
    }
    const v38 = new Int8Array(10438);
    // v38 = .object(ofGroup: Int8Array, withProperties: ["constructor", "__proto__", "byteOffset", "byteLength", "length", "buffer"], withMethods: ["reduce", "reverse", "values", "every", "some", "reduceRight", "join", "sort", "entries", "keys", "forEach", "filter", "copyWithin", "subarray", "lastIndexOf", "fill", "find", "slice", "findIndex", "includes", "indexOf", "set", "map"])
    const v41 = new Uint32Array(58711);
    // v41 = .object(ofGroup: Uint32Array, withProperties: ["__proto__", "buffer", "constructor", "byteOffset", "length", "byteLength"], withMethods: ["reduceRight", "slice", "filter", "fill", "keys", "reverse", "indexOf", "reduce", "lastIndexOf", "includes", "find", "copyWithin", "map", "forEach", "some", "join", "subarray", "values", "every", "entries", "set", "findIndex", "sort"])
    const v48 = "object".constructor;
    // v48 = .function()
    const v49 = {apply:v48,deleteProperty:gc,preventExtensions:Object,ownKeys:v48,isExtensible:Object,getOwnPropertyDescriptor:Number,setPrototypeOf:Number,construct:Number,defineProperty:Number,has:Symbol,set:Number};
    // v49 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["construct", "isExtensible", "setPrototypeOf", "defineProperty", "has", "getOwnPropertyDescriptor", "preventExtensions", "deleteProperty", "set", "apply", "ownKeys"])
    const v51 = new Proxy(v24,v49);
    // v51 = .unknown
    let v54 = 0;
    const v55 = v54 + 1;
    // v55 = .primitive
    for (let v61 = 0; v61 < 100; v61++) {
        const v62 = Symbol(v15);
        // v62 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
    }
    const v64 = v13.reduceRight(v48,Infinity);
    // v64 = .unknown
    let v67 = 0;
    const v68 = v67 + 1;
    // v68 = .primitive
    v67 = v68;
    return v6;
}
for (let v73 = 0; v73 < 100; v73++) {
    const v74 = v14();
    // v74 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
