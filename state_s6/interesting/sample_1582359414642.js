function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
const v5 = new ArrayBuffer(1337);
// v5 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
const v8 = v5.slice(1024,1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
let v10 = undefined;
const v11 = new DataView(v8,v1,v10);
// v11 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
function v12(v13,v14) {
    let v19 = 0;
    do {
        const v20 = 3156875969 <= "pvU0UUjoya";
        // v20 = .boolean
        let v22 = v20;
        const v23 = v22 + 1;
        // v23 = .primitive
        v22 = v23;
        const v24 = v19 + 1;
        // v24 = .primitive
        for (const v26 in "description") {
            for (let v30 = 0; v30 < 4; v30++) {
                const v31 = v11.getInt8(v19);
                // v31 = .integer
            }
        }
        v19 = v24;
    } while (v19 < 8);
}
const v33 = [1337];
// v33 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["filter", "map", "toLocaleString", "push", "splice", "forEach", "flatMap", "findIndex", "reverse", "entries", "every", "indexOf", "toString", "flat", "concat", "shift", "includes", "copyWithin", "values", "some", "slice", "pop", "reduceRight", "join", "fill", "find", "unshift", "sort", "keys", "lastIndexOf", "reduce"])
let v34 = v33;
const v35 = v12(v34);
// v35 = .unknown
}
%NeverOptimizeFunction(main);
main();
