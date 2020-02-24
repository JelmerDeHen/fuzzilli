function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v10 = v7.slice(1024,1337);
// v10 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v12 = undefined;
const v13 = new DataView(v10,v3,v12);
// v13 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
function v14(v15,v16) {
    let v20 = 0;
    let v23 = -128;
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
            const v28 = v13.setUint8(v27,2454811828);
            // v28 = .undefined
            const v29 = v27 + 1;
            // v29 = .primitive
            v27 = v29;
        } while (v27 < 7);
        const v30 = 1337 + 1;
        // v30 = .primitive
        v20 = v30;
    } while (v20 < 8);
}
const v32 = [1337];
// v32 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v33 = v32;
const v34 = v14(v33);
// v34 = .unknown
const v35 = v14(13.37,v7);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
