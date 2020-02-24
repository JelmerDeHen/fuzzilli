function main() {
let v2 = 0;
v2 = 1;
const v5 = [1337,1337];
// v5 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
const v9 = new ArrayBuffer(1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v12 = v9.slice(1024,1337);
// v12 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v14 = undefined;
const v15 = new DataView(v12,v5,v14);
// v15 = .object(ofGroup: DataView, withProperties: ["byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["getInt16", "getUint32", "setFloat32", "getUint8", "setUint8", "setInt8", "setInt32", "setFloat64", "getUint16", "getInt32", "getFloat64", "setInt16", "setUint16", "setUint32", "getFloat32", "getInt8"])
function v16(v17,v18) {
    let v22 = 0;
    let v25 = -2;
    while (v25 < 1337) {
        const v26 = v25 + 1;
        // v26 = .primitive
        v25 = v26;
    }
    do {
        const v27 = 3156875969 <= 8;
        // v27 = .boolean
        let v29 = v27;
        do {
            const v30 = v15.setUint8(v29,2454811828);
            // v30 = .undefined
            let v32 = v22;
            const v33 = v29 + 1;
            // v33 = .primitive
            v29 = v33;
        } while (v29 < 7);
        const v34 = v22 + 1;
        // v34 = .primitive
        v22 = v34;
    } while (v22 < 8);
}
const v36 = [1337];
// v36 = .object(ofGroup: Array, withProperties: ["__proto__", "constructor", "length"], withMethods: ["toString", "fill", "slice", "keys", "unshift", "reverse", "toLocaleString", "copyWithin", "splice", "findIndex", "includes", "map", "every", "find", "flat", "shift", "filter", "sort", "reduce", "lastIndexOf", "flatMap", "concat", "entries", "forEach", "push", "indexOf", "pop", "join", "values", "some", "reduceRight"])
let v37 = v36;
const v38 = v16(v37);
// v38 = .unknown
}
%NeverOptimizeFunction(main);
main();
