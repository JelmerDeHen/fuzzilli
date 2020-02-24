function main() {
const v3 = [1337,1337,1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v4 = {__proto__:"WytjMFvqN8",b:v3,constructor:Uint8ClampedArray};
// v4 = .object(ofGroup: Object, withProperties: ["constructor", "b", "__proto__"])
const v6 = [1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v9 = [1337,1337];
// v9 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v13 = new ArrayBuffer(1337);
// v13 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v19 = 0;
let v22 = 0;
const v23 = v22 + 1;
// v23 = .primitive
v22 = v23;
const v24 = v19 + 1;
// v24 = .primitive
v19 = v24;
const v27 = v13.slice(1024,1337);
// v27 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v29 = undefined;
const v30 = new DataView(v27,v9,v29);
// v30 = .object(ofGroup: DataView, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer"], withMethods: ["getUint8", "setUint8", "setInt16", "setUint16", "getUint32", "setFloat32", "getInt8", "setFloat64", "getInt32", "setInt8", "getFloat32", "setInt32", "setUint32", "getInt16", "getUint16", "getFloat64"])
function v31(v32,v33) {
    let v37 = 0;
    let v41 = 0;
    const v42 = v41 + 1;
    // v42 = .primitive
    v41 = v42;
    let v44 = -2;
    while (v44 < 1337) {
        const v45 = v44 + 1;
        // v45 = .primitive
        v44 = v45;
    }
    const v46 = 3156875969 <= 8;
    // v46 = .boolean
    let v48 = v46;
    do {
        const v49 = v30.getInt16(v48,2454811828);
        // v49 = .integer
        const v50 = v48 + 1;
        // v50 = .primitive
        const v51 = v30.setInt32(v49,v33);
        // v51 = .undefined
        v48 = v50;
    } while (v48 < 7);
    const v52 = v37 + 1;
    // v52 = .primitive
    v37 = v52;
}
const v54 = [1337];
// v54 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v55 = v54;
const v56 = v31(v55);
// v56 = .unknown
const v57 = v31(v9);
// v57 = .unknown
}
%NeverOptimizeFunction(main);
main();
