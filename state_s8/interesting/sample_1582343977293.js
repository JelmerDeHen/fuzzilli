function main() {
const v4 = [13.37];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v7 = [1658799280,v4,1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v8 = {};
// v8 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v9 = {d:v4,__proto__:String,c:1337,length:v6,toString:v7,valueOf:13.37};
// v9 = .object(ofGroup: Object, withProperties: ["toString", "c", "__proto__", "valueOf", "d", "length"], withMethods: ["__proto__"])
let v10 = v4;
const v12 = [];
// v12 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
try {
    const v15 = [1337,13.37];
    // v15 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v16 = v15[1024];
    // v16 = .unknown
    let v18 = 65536;
    const v19 = [];
    // v19 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v21 = new Int16Array(v18);
    // v21 = .object(ofGroup: Int16Array, withProperties: ["byteOffset", "constructor", "byteLength", "__proto__", "length", "buffer"], withMethods: ["includes", "indexOf", "forEach", "filter", "map", "reduceRight", "join", "entries", "sort", "reduce", "lastIndexOf", "set", "keys", "subarray", "slice", "findIndex", "values", "reverse", "some", "every", "copyWithin", "fill", "find"])
    const v22 = v19.__proto__;
    // v22 = .object()
    v22.__proto__ = v21;
    for (let v27 = 0; v27 < 0; v27++) {
        let v28 = v19;
    }
    for (let v32 = 0; v32 < 100; v32++) {
    }
    let v33 = String;
    const v34 = {set:Array,get:Array};
    // v34 = .object(ofGroup: Object, withProperties: ["__proto__"], withMethods: ["get", "set"])
    const v36 = Object.defineProperty(v12,1073741824,v34);
    // v36 = .undefined
    let v39 = 0;
    const v40 = v39 + 1;
    // v40 = .primitive
    v39 = v40;
    const v41 = {has:Array,construct:v16,toString:v16,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v16,isExtensible:v16,call:v16,e:Array,getOwnPropertyDescriptor:Array};
    // v41 = .object(ofGroup: Object, withProperties: ["construct", "isExtensible", "call", "toString", "preventExtensions", "__proto__"], withMethods: ["deleteProperty", "getOwnPropertyDescriptor", "e", "has", "setPrototypeOf"])
    const v43 = new Proxy(v12,v41);
    // v43 = .unknown
    for (const v44 in v43) {
    }
} catch(v45) {
}
}
%NeverOptimizeFunction(main);
main();
