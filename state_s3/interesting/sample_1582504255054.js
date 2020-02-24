function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v10 = v7.slice(1024,1337);
// v10 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v12 = undefined;
const v13 = new DataView(v10,v3,v12);
// v13 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["getUint8", "setUint32", "setUint16", "setInt16", "getInt8", "getInt16", "getInt32", "setFloat64", "getFloat64", "getFloat32", "setInt8", "setInt32", "getUint16", "setUint8", "setFloat32", "getUint32"])
function v15(v16,v17) {
    let v22 = 0;
    do {
        const v23 = 3156875969 === "pvU0UUjoya";
        // v23 = .boolean
        const v24 = (13.37)[v23];
        // v24 = .unknown
        const v25 = v13.getInt8(v24);
        // v25 = .integer
        let v27 = v23;
        do {
            const v28 = v13.getInt8(0,2454811828);
            // v28 = .integer
            const v29 = v27 + 1;
            // v29 = .primitive
            let v30 = v28;
            while (v30 < v27) {
                const v31 = v30 + 1;
                // v31 = .primitive
                v30 = v31;
            }
            v27 = v29;
        } while (v27 < 7);
        const v32 = v22 + 1;
        // v32 = .primitive
        v22 = v32;
    } while (v22 < 8);
}
const v34 = [1337];
// v34 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v35 = v34;
const v36 = v15(v35);
// v36 = .unknown
}
%NeverOptimizeFunction(main);
main();
