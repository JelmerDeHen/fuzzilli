function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v2 = {d:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v5 = [5.0,5.0,5.0,5.0];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
function v6(v7,v8) {
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
    const v16 = new ArrayBuffer(1337);
    // v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v19 = v16.slice(1024,1337);
    // v19 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v21 = undefined;
    const v22 = new DataView(v19,v12,v21);
    // v22 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
    let v26 = 0;
    do {
        const v27 = v22.getUint16(0,4221860980);
        // v27 = .integer
        const v28 = arguments.__proto__;
        // v28 = .unknown
        v28.toString = v2;
        function v29(v30,v31,v32) {
            const v33 = v27 - v29;
            // v33 = .number
        }
        let v34 = v27;
        const v35 = !v34;
        // v35 = .boolean
        v34 = v35;
        const v36 = v26 + 1;
        // v36 = .primitive
        for (const v38 in "description") {
            const v39 = "EPSILON".concat(4221860980,v34,v34);
            // v39 = .string + .object(ofGroup: String, withProperties: ["length", "__proto__", "constructor"], withMethods: ["trim", "endsWith", "split", "charAt", "padStart", "codePointAt", "substring", "charCodeAt", "replace", "lastIndexOf", "includes", "repeat", "indexOf", "slice", "startsWith", "concat", "padEnd"])
        }
        v26 = v36;
    } while (v26 < 8);
}
const v40 = v5.sort(v6);
// v40 = .undefined
}
%NeverOptimizeFunction(main);
main();
