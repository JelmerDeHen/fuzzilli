function main() {
const v1 = [5.0,5.0,5.0,5.0];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
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
    // v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    const v17 = new ArrayBuffer(1337);
    // v17 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v20 = v17.slice(1024,1337);
    // v20 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v22 = undefined;
    const v23 = new DataView(v20,v13,v22);
    // v23 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
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
    // v42 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
    let v43 = v42;
    const v44 = v25(v43);
    // v44 = .unknown
}
const v45 = v1.sort(v2);
// v45 = .undefined
}
%NeverOptimizeFunction(main);
main();
