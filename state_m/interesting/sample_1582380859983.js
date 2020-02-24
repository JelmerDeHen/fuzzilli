function main() {
const v2 = [13.37];
// v2 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v4 = [1337,1337,1337,1337,1337];
// v4 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v5 = {valueOf:v2,a:v4,length:13.37,constructor:"d",d:1337};
// v5 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "valueOf", "constructor", "a", "length"])
const v8 = [1337,1337];
// v8 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
const v12 = new ArrayBuffer(1337);
// v12 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v15 = v12.slice(1024,1337);
// v15 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v17 = undefined;
const v18 = new DataView(v15,v8,v17);
// v18 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
function v20(v21,v22) {
    let v27 = 0;
    do {
        const v28 = 3156875969 === "pvU0UUjoya";
        // v28 = .boolean
        let v30 = v28;
        const v31 = v18.getUint16(0,2454811828);
        // v31 = .integer
        let v33 = v31;
        while (v33 < -4294967297) {
        }
        const v34 = v27 + 1;
        // v34 = .primitive
        for (const v36 in "description") {
        }
        v27 = v34;
    } while (v27 <= 8);
}
const v38 = [1337];
// v38 = .object(ofGroup: Array, withProperties: ["__proto__", "length", "constructor"], withMethods: ["slice", "toLocaleString", "join", "sort", "some", "find", "toString", "reduceRight", "pop", "concat", "fill", "unshift", "splice", "reverse", "findIndex", "filter", "copyWithin", "indexOf", "keys", "includes", "entries", "every", "values", "shift", "map", "flatMap", "push", "lastIndexOf", "flat", "reduce", "forEach"])
let v39 = v38;
const v40 = v20(v39);
// v40 = .unknown
const v41 = v20(ArrayBuffer,v5);
// v41 = .unknown
}
%NeverOptimizeFunction(main);
main();
