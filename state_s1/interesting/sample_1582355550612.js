function main() {
let v7 = 0;
const v11 = v7 + 1;
// v11 = .primitive
v7 = v11;
let v18 = 0;
const v19 = v18 + 1;
// v19 = .primitive
v18 = v19;
const v23 = [1337,1337];
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v27 = new ArrayBuffer(1337);
// v27 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v30 = v27.slice(1024,1337);
// v30 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v32 = undefined;
const v33 = new DataView(v30,v23,v32);
// v33 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
let v34 = 0;
function v36(v37,v38) {
    let v43 = 0;
    do {
        const v44 = 3156875969 <= "pvU0UUjoya";
        // v44 = .boolean
        let v46 = v44;
        do {
            const v47 = v33.setUint32(13.37,2454811828);
            // v47 = .undefined
            const v48 = v46 + 1;
            // v48 = .primitive
            v46 = v48;
        } while (v46 < 7);
        const v49 = v43 + 1;
        // v49 = .primitive
        v43 = v49;
    } while (v43 < 8);
}
const v51 = [1337];
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v52 = v51;
const v53 = v36(v52);
// v53 = .unknown
const v54 = v36(v34,0);
// v54 = .unknown
let v56 = 0;
const v57 = v56 + 1;
// v57 = .primitive
v56 = v57;
}
%NeverOptimizeFunction(main);
main();
