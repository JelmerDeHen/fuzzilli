function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
function v13(v14,v15) {
    let v18 = 3156875969;
    let v21 = -2;
    while (v21 < 1337) {
        const v22 = v21 + 1;
        // v22 = .primitive
        v21 = v22;
    }
    do {
        const v23 = 3156875969 <= 8;
        // v23 = .boolean
        let v25 = v23;
        do {
            const v26 = v12.getInt16(v25,2454811828);
            // v26 = .integer
            const v27 = v25 + 1;
            // v27 = .primitive
            v25 = v27;
        } while (v25 < 7);
        const v28 = v18 + 1;
        // v28 = .primitive
        v18 = v28;
    } while (v18 < 8);
}
const v30 = [1337];
// v30 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v31 = v30;
const v32 = v13(v31);
// v32 = .unknown
const v33 = v13();
// v33 = .unknown
let v36 = 0;
const v37 = v36 + 1;
// v37 = .primitive
v36 = v37;
}
%NeverOptimizeFunction(main);
main();
