function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v5 = new ArrayBuffer(1337);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v8 = v5.slice(-128,1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v10 = undefined;
const v11 = new DataView(v8,v1,v10);
// v11 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
let v17 = 0;
function v18(v19,v20) {
    const v21 = [13.37];
    // v21 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v25 = "pvU0UUjoya".__proto__;
    // v25 = .object()
    let v27 = 0;
    do {
        const v28 = 3156875969 <= "pvU0UUjoya";
        // v28 = .boolean
        let v30 = v28;
        do {
            let v31 = v25;
            try {
                const v32 = v31[7];
                // v32 = .unknown
                const v33 = v11.setUint16(v32,v27);
                // v33 = .undefined
                v31[1919138714] = v30;
            } catch(v34) {
            }
            const v35 = v30 + 1;
            // v35 = .primitive
            v30 = v35;
        } while (v30 < 7);
        const v36 = v27 + 1;
        // v36 = .primitive
        v27 = v36;
    } while (v27 < 8);
    if (v20) {
    } else {
        const v37 = v18(v17,v21);
        // v37 = .unknown
    }
}
const v39 = [1337];
// v39 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v40 = v39;
const v41 = v18(v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
