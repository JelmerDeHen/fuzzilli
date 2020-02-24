function main() {
const v1 = {__proto__:536870912};
// v1 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v7 = [1337,1337];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v11 = new ArrayBuffer(1337);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v14 = v11.slice(1024,1337);
// v14 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v16 = undefined;
const v17 = new DataView(v14,v7,v16);
// v17 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
function v19(v20,v21) {
    let v26 = 0;
    do {
        const v27 = 3156875969 === "pvU0UUjoya";
        // v27 = .boolean
        let v29 = v27;
        do {
            const v30 = v17.getInt8(0,2454811828);
            // v30 = .integer
            function v33(v34,v35) {
            }
            const v37 = v33();
            // v37 = .unknown
            const v38 = v29 + 1;
            // v38 = .primitive
            let v40 = v30;
            while (v40 < 1) {
                const v41 = v40 + 1;
                // v41 = .primitive
                v40 = v41;
            }
            v29 = v38;
        } while (v29 < 7);
        const v42 = v26 + 1;
        // v42 = .primitive
        for (const v44 in "description") {
        }
        v26 = v42;
    } while (v26 < 8);
}
const v46 = [1337];
// v46 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v47 = v46;
const v48 = v19(v47);
// v48 = .unknown
}
%NeverOptimizeFunction(main);
main();
