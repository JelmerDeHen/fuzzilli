function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v10 = v7.slice(1024,1337);
// v10 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v12 = undefined;
const v13 = new DataView(v10,v3,v12);
// v13 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
let v14 = 0;
function v17(v18,v19) {
    let v24 = 0;
    do {
        const v25 = 3156875969 <= "pvU0UUjoya";
        // v25 = .boolean
        let v27 = v25;
        do {
            const v28 = v13.setUint32(0,2454811828);
            // v28 = .undefined
            const v29 = v27 + 1;
            // v29 = .primitive
            const v30 = v13.byteOffset;
            // v30 = .integer
            v27 = v29;
        } while (v27 < 7);
        const v31 = v24 + 1;
        // v31 = .primitive
        v24 = v31;
    } while (v24 < 8);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v34 = v33;
const v35 = v17(v34);
// v35 = .unknown
const v36 = v17(v14,0);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
