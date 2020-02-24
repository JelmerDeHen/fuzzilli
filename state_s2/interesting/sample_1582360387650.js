function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["getInt16", "getUint32", "setFloat32", "getUint8", "setUint8", "setInt8", "setInt32", "setFloat64", "getUint16", "getInt32", "getFloat64", "setInt16", "setUint16", "setUint32", "getFloat32", "getInt8"])
function v13(v14,v15) {
    let v20 = -2;
    while (v20 < 1337) {
        const v21 = v20 + 1;
        // v21 = .primitive
        v20 = v21;
    }
    const v22 = 3156875969 <= 8;
    // v22 = .boolean
    let v24 = v22;
    do {
        const v25 = v12.setUint8(v24,2454811828);
        // v25 = .undefined
        for (const v27 in "boolean") {
            function v28(v29,v30) {
                return v22;
            }
        }
        const v31 = v24 + 1;
        // v31 = .primitive
        v24 = v31;
    } while (v24 < 7);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v34 = v33;
const v35 = v13(v34);
// v35 = .unknown
const v36 = v12[-1662380622];
// v36 = .unknown
const v37 = v13(1337,v36);
// v37 = .unknown
const v39 = [];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v42 = [1337,13.37];
// v42 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v43 = v42[1024];
// v43 = .unknown
const v44 = {has:Array,construct:v43,toString:v43,deleteProperty:Array,setPrototypeOf:Array,preventExtensions:v43,isExtensible:v43,call:v43,set:Array,getOwnPropertyDescriptor:Array};
// v44 = .object(ofGroup: Object, withProperties: ["preventExtensions", "call", "__proto__", "isExtensible", "toString", "construct"], withMethods: ["set", "setPrototypeOf", "getOwnPropertyDescriptor", "has", "deleteProperty"])
const v46 = v13(v39);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
