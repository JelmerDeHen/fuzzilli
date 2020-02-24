function main() {
const v2 = [5.0,5.0,5.0,5.0];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
function v3(v4,v5) {
    const v7 = arguments.length;
    // v7 = .unknown
    let v10 = 0;
    const v11 = v10 + 1;
    // v11 = .primitive
    v10 = v11;
    const v14 = [1337,1337];
    // v14 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    const v18 = new ArrayBuffer(1337);
    // v18 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v21 = v18.slice(1024,1337);
    // v21 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v23 = undefined;
    const v24 = new DataView(v21,v14,v23);
    // v24 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
    const v27 = [1337];
    // v27 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
    let v28 = v27;
    let v30 = undefined;
    let v33 = 0;
    do {
        const v34 = v24.getUint16(0,2454811828);
        // v34 = .integer
        let v35 = v34;
        const v36 = !v35;
        // v36 = .boolean
        v35 = v36;
        const v37 = v33 + 1;
        // v37 = .primitive
        for (const v39 in "description") {
            const v40 = "EPSILON".concat(2454811828,v35,v35);
            // v40 = .string + .object(ofGroup: String, withProperties: ["constructor", "length", "__proto__"], withMethods: ["includes", "indexOf", "startsWith", "codePointAt", "split", "slice", "concat", "trim", "substring", "charCodeAt", "endsWith", "replace", "padStart", "repeat", "padEnd", "charAt", "lastIndexOf"])
        }
        v33 = v37;
    } while (v33 < 8);
}
const v41 = v2.sort(v3);
// v41 = .undefined
}
%NeverOptimizeFunction(main);
main();
