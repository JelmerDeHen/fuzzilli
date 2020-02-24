function main() {
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v4 = {d:".EFfo9RFsz",__proto__:1337};
// v4 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
const v11 = new ArrayBuffer(1337);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v14 = v11.slice(1024,1337);
// v14 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v16 = undefined;
const v17 = new DataView(v14,v7,v16);
// v17 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["getUint8", "setUint32", "setUint16", "setInt16", "getInt8", "getInt16", "getInt32", "setFloat64", "getFloat64", "getFloat32", "setInt8", "setInt32", "getUint16", "setUint8", "setFloat32", "getUint32"])
function v19(v20,v21) {
    let v26 = 0;
    do {
        const v27 = 3156875969 === "pvU0UUjoya";
        // v27 = .boolean
        let v29 = v27;
        do {
            const v30 = v17.getFloat32(0,2454811828);
            // v30 = .float
            function v31(v32,v33) {
                'use strict'
                let v34 = v30;
            }
            const v35 = v29 + 1;
            // v35 = .primitive
            const v38 = new Int16Array(1337);
            // v38 = .object(ofGroup: Int16Array, withProperties: ["__proto__", "buffer", "constructor", "length", "byteOffset", "byteLength"], withMethods: ["slice", "fill", "sort", "includes", "entries", "reverse", "find", "keys", "set", "indexOf", "some", "subarray", "reduceRight", "map", "join", "copyWithin", "filter", "reduce", "values", "forEach", "lastIndexOf", "findIndex", "every"])
            let v40 = v30;
            while (v40 >= 1) {
                const v41 = !v40;
                // v41 = .boolean
                v40 = v41;
            }
            v29 = v35;
        } while (v29 < 7);
        const v42 = v26 + 1;
        // v42 = .primitive
        v26 = v42;
    } while (v26 < 8);
}
const v44 = [1337];
// v44 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "some", "every", "concat", "fill", "keys", "copyWithin", "indexOf", "find", "reverse", "map", "unshift", "pop", "push", "reduce", "sort", "shift", "toString", "filter", "forEach", "includes", "flat", "splice", "toLocaleString", "flatMap", "entries", "findIndex", "reduceRight", "join", "lastIndexOf", "values"])
let v45 = v44;
const v46 = v19(v45);
// v46 = .unknown
let v49 = 0;
const v50 = v19(v4,v2);
// v50 = .unknown
}
%NeverOptimizeFunction(main);
main();
