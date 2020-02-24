function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
function v14(v15,v16) {
    let v21 = 0;
    do {
        const v22 = 3156875969 === "pvU0UUjoya";
        // v22 = .boolean
        let v24 = v22;
        do {
            const v25 = v12.getInt8(0,2454811828);
            // v25 = .integer
            const v26 = v24 + 1;
            // v26 = .primitive
            let v28 = v25;
            while (v28 < 1) {
                const v31 = [1337,1337];
                // v31 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
                const v35 = new ArrayBuffer(1337);
                // v35 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
                const v38 = v35.slice(1024,1337);
                // v38 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
                let v40 = undefined;
                const v41 = new DataView(v38,v31,v40);
                // v41 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
                const v44 = 3156875969 <= 8;
                // v44 = .boolean
                let v46 = v44;
                do {
                    const v47 = v41.getInt16(v46,2454811828);
                    // v47 = .integer
                    const v48 = v46 + 1;
                    // v48 = .primitive
                    v46 = v48;
                } while (v46 < 7);
                const v49 = !v28;
                // v49 = .boolean
                v28 = v49;
            }
            v24 = v26;
        } while (v24 < 7);
        const v50 = v21 + 1;
        // v50 = .primitive
        v21 = v50;
    } while (v21 < 8);
}
const v53 = [1337];
// v53 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v54 = v53;
const v55 = v14(v54);
// v55 = .unknown
}
%NeverOptimizeFunction(main);
main();
