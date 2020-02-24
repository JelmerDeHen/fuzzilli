function main() {
const v4 = [13.37,13.37,13.37,13.37];
// v4 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = [1337,1337,1337,1337,1337];
// v6 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v7 = [v4,RegExp,-4294967296,-4294967296];
// v7 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v8 = {c:1337,valueOf:v6,b:13.37,e:-4294967296};
// v8 = .object(ofGroup: Object, withProperties: ["c", "e", "b", "__proto__", "valueOf"])
const v9 = {e:-4294967296,__proto__:v7,b:RegExp};
// v9 = .object(ofGroup: Object, withProperties: ["e", "__proto__"], withMethods: ["b"])
let v10 = 13.37;
const v13 = [1337,1337,1337,1337,1337];
// v13 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v18 = new ArrayBuffer(1337);
// v18 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
function v22(v23,v24) {
    let v27 = 0;
    for (const v29 in "boolean") {
        let v32 = 0;
        do {
            const v36 = 13.37 << eval;
            // v36 = .integer
            const v37 = "pvU0UUjoya".codePointAt(v36);
            // v37 = .integer
            const v38 = eval(v37);
            // v38 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
            const v39 = v27 << 2;
            // v39 = .integer
            const v40 = v32 + 1;
            // v40 = .primitive
            v32 = v40;
        } while (v32 <= 8);
    }
}
const v41 = v22(9);
// v41 = .unknown
const v43 = v18.slice(1024,1337);
// v43 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v45 = undefined;
const v46 = new DataView(v43,127,v45);
// v46 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
try {
    const v47 = Object.create("u1LJPRHgGg",v13);
    // v47 = .object()
} catch(v48) {
}
}
%NeverOptimizeFunction(main);
main();
