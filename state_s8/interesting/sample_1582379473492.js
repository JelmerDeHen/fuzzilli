function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v9 = 0;
const v16 = v6.slice(1024,1337);
// v16 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v18 = undefined;
const v19 = new DataView(v16,v2,v18);
// v19 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
function v21(v22,v23) {
    let v28 = 0;
    do {
        const v29 = 3156875969 === "pvU0UUjoya";
        // v29 = .boolean
        let v31 = v29;
        do {
            const v32 = v19.getInt8(0,2454811828);
            // v32 = .integer
            const v33 = v31 + 1;
            // v33 = .primitive
            let v35 = v32;
            while (v35 < 1) {
                const v36 = v35 + 1;
                // v36 = .primitive
                v35 = v36;
            }
            v31 = v33;
        } while (v31 < 7);
        const v37 = v28 + 1;
        // v37 = .primitive
        for (const v39 in "description") {
        }
        v28 = v37;
    } while (v28 < 8);
}
const v41 = [1337];
// v41 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["shift", "findIndex", "reduce", "toString", "flatMap", "unshift", "map", "flat", "fill", "slice", "keys", "some", "splice", "entries", "push", "filter", "toLocaleString", "every", "indexOf", "forEach", "copyWithin", "reverse", "find", "includes", "reduceRight", "values", "join", "concat", "pop", "sort", "lastIndexOf"])
let v42 = v41;
const v43 = v21(v42);
// v43 = .unknown
}
%NeverOptimizeFunction(main);
main();
