function main() {
const v1 = [5.0,5.0,5.0,5.0];
// v1 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
function v2(v3,v4) {
    const v6 = arguments.length;
    // v6 = .unknown
    let v9 = 0;
    while (v9 < 1337) {
        const v10 = v9 + 1;
        // v10 = .primitive
        v9 = v10;
    }
    const v13 = [1337,1337];
    // v13 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    const v17 = new ArrayBuffer(1337);
    // v17 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v20 = v17.slice(1024,1337);
    // v20 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v22 = undefined;
    const v23 = new DataView(v20,v13,v22);
    // v23 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
    function v25(v26,v27) {
        let v31 = 0;
        do {
            const v32 = v23.getUint16(0,2454811828);
            // v32 = .integer
            const v34 = "pvU0UUjoya" + null;
            // v34 = .primitive
            let v36 = v32;
            const v37 = !v36;
            // v37 = .boolean
            v36 = v37;
            const v38 = v31 + 1;
            // v38 = .primitive
            for (const v40 in "description") {
            }
            v31 = v38;
        } while (v31 < 8);
    }
    const v42 = [1337];
    // v42 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
    let v43 = v42;
    const v44 = v25(v43);
    // v44 = .unknown
}
const v45 = v1.sort(v2);
// v45 = .undefined
}
%NeverOptimizeFunction(main);
main();
