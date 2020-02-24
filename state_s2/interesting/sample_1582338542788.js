function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v5 = new ArrayBuffer(1337);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v8 = v5.slice(1024,1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v10 = undefined;
const v11 = new DataView(v8,v1,v10);
// v11 = .object(ofGroup: DataView, withProperties: ["byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["getInt16", "getUint32", "setFloat32", "getUint8", "setUint8", "setInt8", "setInt32", "setFloat64", "getUint16", "getInt32", "getFloat64", "setInt16", "setUint16", "setUint32", "getFloat32", "getInt8"])
function v12(v13,v14) {
    let v19 = 0;
    let v22 = -2;
    while (v22 < 1337) {
        const v23 = v22 + 1;
        // v23 = .primitive
        const v24 = v11.getFloat64(v14);
        // v24 = .float
        v22 = v23;
    }
    const v25 = 3156875969 <= "pvU0UUjoya";
    // v25 = .boolean
    let v27 = v25;
    const v28 = v27 + 1;
    // v28 = .primitive
    v27 = v28;
    const v29 = v19 + 1;
    // v29 = .primitive
    v19 = v29;
}
const v31 = [1337];
// v31 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v32 = v31;
const v33 = v12(v32);
// v33 = .unknown
}
%NeverOptimizeFunction(main);
main();
