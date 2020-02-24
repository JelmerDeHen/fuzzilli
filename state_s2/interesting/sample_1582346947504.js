function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v10 = v7.slice(1024,1337);
// v10 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v12 = undefined;
const v13 = new DataView(v10,v3,v12);
// v13 = .object(ofGroup: DataView, withProperties: ["byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["getInt16", "getUint32", "setFloat32", "getUint8", "setUint8", "setInt8", "setInt32", "setFloat64", "getUint16", "getInt32", "getFloat64", "setInt16", "setUint16", "setUint32", "getFloat32", "getInt8"])
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
// v33 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v34 = v33;
const v35 = v17(v34);
// v35 = .unknown
const v36 = v17(v14,0);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
