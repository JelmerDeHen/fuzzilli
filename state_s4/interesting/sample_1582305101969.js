function main() {
const v3 = [1337,1337];
// v3 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
const v7 = new ArrayBuffer(1337);
// v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v10 = v7.slice(1024,1337);
// v10 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v12 = undefined;
const v13 = new DataView(v10,v3,v12);
// v13 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setInt16", "setUint8", "getFloat64", "getInt16", "getUint32", "getUint8", "setFloat64", "getUint16", "setFloat32", "getInt8", "setUint32", "getFloat32", "setInt32", "getInt32", "setUint16"])
let v14 = 0;
let v17 = 0;
function v18(v19,v20) {
    const v22 = [13.37];
    // v22 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
    const v26 = "pvU0UUjoya".__proto__;
    // v26 = .object()
    let v28 = 0;
    do {
        const v29 = 3156875969 <= "pvU0UUjoya";
        // v29 = .boolean
        let v31 = v29;
        do {
            let v32 = v26;
            try {
                const v33 = {constructor:v19,__proto__:v31,c:v13};
                // v33 = .object(ofGroup: Object, withProperties: ["__proto__", "c", "constructor"])
            } catch(v34) {
                v34[v32] = v18;
            }
            const v35 = v31 + 1;
            // v35 = .primitive
            v31 = v35;
        } while (v31 < 7);
        const v36 = v28 + 1;
        // v36 = .primitive
        v28 = v36;
    } while (v28 < 8);
    if (v20) {
    } else {
        const v37 = v18(v17,v22);
        // v37 = .unknown
    }
    let v40 = 0;
    const v41 = v40 + 1;
    // v41 = .primitive
    v40 = v41;
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["length", "__proto__", "constructor"], withMethods: ["copyWithin", "reduceRight", "concat", "every", "some", "toString", "filter", "toLocaleString", "slice", "map", "join", "values", "sort", "indexOf", "keys", "splice", "fill", "includes", "pop", "reduce", "lastIndexOf", "find", "flatMap", "findIndex", "unshift", "flat", "reverse", "shift", "entries", "forEach", "push"])
let v44 = v43;
const v45 = v18(v44);
// v45 = .unknown
const v46 = v18(v14,0);
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
