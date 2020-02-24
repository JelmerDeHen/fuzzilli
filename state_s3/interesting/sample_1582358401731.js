function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["getUint8", "setUint32", "setUint16", "setInt16", "getInt8", "getInt16", "getInt32", "setFloat64", "getFloat64", "getFloat32", "setInt8", "setInt32", "getUint16", "setUint8", "setFloat32", "getUint32"])
function v13(v14,v15) {
    let v20 = -2;
    while (v20 < 1337) {
        const v21 = v20 + 1;
        // v21 = .primitive
        v20 = v21;
    }
    const v22 = 3156875969 <= 8;
    // v22 = .boolean
    let v24 = v22;
    do {
        const v25 = v12.setUint8(v24,2454811828);
        // v25 = .undefined
        for (const v27 in "boolean") {
            let v30 = 0;
            function v31(v32,v33) {
                return v22;
            }
            const v34 = v30 + 1;
            // v34 = .primitive
            v30 = v34;
        }
        const v35 = v24 + 1;
        // v35 = .primitive
        v24 = v35;
    } while (v24 < 7);
}
const v37 = [1337];
// v37 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v38 = v37;
const v39 = v13(v38);
// v39 = .unknown
const v40 = v12[-1662380622];
// v40 = .unknown
const v41 = v13(1337,v40);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
