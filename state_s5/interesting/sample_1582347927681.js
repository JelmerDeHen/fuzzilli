function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v10 = v7.slice(1024,1337);
// v10 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v12 = undefined;
const v13 = new DataView(v10,v3,v12);
// v13 = .object(ofGroup: DataView, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer"], withMethods: ["getUint8", "setUint8", "setInt16", "setUint16", "getUint32", "setFloat32", "getInt8", "setFloat64", "getInt32", "setInt8", "getFloat32", "setInt32", "setUint32", "getInt16", "getUint16", "getFloat64"])
let v14 = 0;
function v17(v18,v19) {
    let v24 = 0;
    do {
        const v25 = 3156875969 <= "pvU0UUjoya";
        // v25 = .boolean
        const v28 = Symbol.isConcatSpreadable;
        // v28 = .object(ofGroup: Symbol, withProperties: ["description", "__proto__"])
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
// v34 = .object(ofGroup: Array, withProperties: ["constructor", "length", "__proto__"], withMethods: ["toString", "push", "find", "sort", "keys", "flat", "forEach", "lastIndexOf", "concat", "reverse", "indexOf", "toLocaleString", "splice", "reduceRight", "shift", "entries", "slice", "pop", "findIndex", "every", "unshift", "map", "flatMap", "includes", "fill", "reduce", "copyWithin", "filter", "join", "some", "values"])
let v35 = v34;
const v36 = v17(v35);
// v36 = .unknown
const v37 = v17(v14,0);
// v37 = .unknown
}
%NeverOptimizeFunction(main);
main();
