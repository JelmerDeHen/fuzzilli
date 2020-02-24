function main() {
const v1 = [1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v4 = [1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = new ArrayBuffer(1337);
// v8 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v11 = v8.slice(1024,1337);
// v11 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v13 = undefined;
const v14 = new DataView(v11,v4,v13);
// v14 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
function v15(v16,v17) {
    try {
        const v22 = eval("kF9YtH+28n");
        // v22 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
    } catch(v23) {
    }
    let v26 = -2;
    while (v26 < 1337) {
        const v27 = v26 + 1;
        // v27 = .primitive
        v26 = v27;
    }
    const v28 = 3156875969 <= 3270687459;
    // v28 = .boolean
    let v30 = v28;
    do {
        const v31 = v14.getFloat64(v30,2454811828);
        // v31 = .float
        const v32 = v30 + 1;
        // v32 = .primitive
        const v33 = v14.setInt32(v32,v17);
        // v33 = .undefined
        v30 = v32;
    } while (v30 < 7);
}
const v35 = [1337];
// v35 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v36 = v35;
const v37 = v15(v36);
// v37 = .unknown
const v38 = v15(v4);
// v38 = .unknown
const v39 = typeof v1;
// v39 = .string
const v41 = v39 === "symbol";
// v41 = .boolean
let v47 = 0;
const v48 = v47 + 1;
// v48 = .primitive
v47 = v48;
}
%NeverOptimizeFunction(main);
main();
