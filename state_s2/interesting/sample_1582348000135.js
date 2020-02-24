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
        const v28 = Symbol.isConcatSpreadable;
        // v28 = .object(ofGroup: Symbol, withProperties: ["__proto__", "description"])
        let v29 = v25;
        do {
            const v30 = v13.getFloat32(0,2454811828);
            // v30 = .float
            const v31 = v29 + 1;
            // v31 = .primitive
            v29 = v31;
        } while (v29 < 7);
        const v32 = v24 + 1;
        // v32 = .primitive
        v24 = v32;
    } while (v24 < 8);
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v35 = v34;
const v36 = v17(v35);
// v36 = .unknown
const v37 = v17(v14,0);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
