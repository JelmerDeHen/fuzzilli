function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
function v14(v15,v16) {
    let v21 = 0;
    do {
        const v22 = 3156875969 === "pvU0UUjoya";
        // v22 = .boolean
        let v24 = v22;
        do {
            const v25 = v12.getInt8(0,2454811828);
            // v25 = .integer
            function v26(v27,v28) {
                'use strict'
                let v29 = v25;
            }
            const v30 = v24 + 1;
            // v30 = .primitive
            const v33 = new Int16Array(1337);
            // v33 = .object(ofGroup: Int16Array, withProperties: ["constructor", "byteOffset", "byteLength", "__proto__", "buffer", "length"], withMethods: ["sort", "entries", "findIndex", "slice", "subarray", "map", "find", "every", "some", "join", "copyWithin", "includes", "filter", "lastIndexOf", "values", "reduce", "set", "indexOf", "reduceRight", "forEach", "fill", "reverse", "keys"])
            let v35 = v25;
            while (v35 < 1) {
                const v36 = !v35;
                // v36 = .boolean
                v35 = v36;
            }
            v24 = v30;
        } while (v24 < 7);
        const v37 = v21 + 1;
        // v37 = .primitive
        v21 = v37;
    } while (v21 < 8);
}
const v40 = [1337];
// v40 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v41 = v40;
const v42 = v14(v41);
// v42 = .unknown
}
%NeverOptimizeFunction(main);
main();
