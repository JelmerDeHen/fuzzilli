function main() {
const v2 = [5.0,5.0,5.0,5.0];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v3(v4,v5) {
    const v8 = [1337,1337];
    // v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v12 = new ArrayBuffer(1337);
    // v12 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v15 = v12.slice(1024,1337);
    // v15 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v17 = undefined;
    const v18 = new DataView(v15,v8,v17);
    // v18 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
    let v22 = 0;
    do {
        const v23 = v18.getUint16(0,0);
        // v23 = .integer
        const v24 = v22 + 1;
        // v24 = .primitive
        for (const v26 in "description") {
            const v27 = v18.setUint16(v23,-2147483648);
            // v27 = .undefined
            let v30 = 0;
            const v31 = v30 + 1;
            // v31 = .primitive
            v30 = v31;
            let v34 = 0;
            const v35 = v34 + 1;
            // v35 = .primitive
            v34 = v35;
        }
        v22 = v24;
    } while (v22 < 8);
}
const v36 = v2.sort(v3);
// v36 = .undefined
}
%NeverOptimizeFunction(main);
main();
