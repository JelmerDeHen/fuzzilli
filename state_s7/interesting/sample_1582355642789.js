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
// v23 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v27 = new ArrayBuffer(1337);
// v27 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v30 = v27.slice(1024,1337);
// v30 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v32 = undefined;
const v33 = new DataView(v30,v23,v32);
// v33 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
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
// v51 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
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