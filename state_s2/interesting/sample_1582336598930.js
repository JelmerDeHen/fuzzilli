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
function v14(v15,v16) {
    let v20 = 0;
    let v23 = -2;
    while (v23 < 1337) {
        const v24 = v23 + 1;
        // v24 = .primitive
        v23 = v24;
    }
    do {
        const v25 = 3156875969 <= 8;
        // v25 = .boolean
        let v27 = v25;
        do {
            const v28 = v13.setUint8("eyohNwjVax",2454811828);
            // v28 = .undefined
            const v29 = v27 + 1;
            // v29 = .primitive
            v27 = v29;
        } while (v27 < 7);
        const v30 = v20 + 1;
        // v30 = .primitive
        v20 = v30;
    } while (v20 < 8);
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v33 = v32;
const v34 = v14(v33);
// v34 = .unknown
}
%NeverOptimizeFunction(main);
main();
