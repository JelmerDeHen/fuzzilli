function main() {
const v1 = [1337,1337,1337,1337];
// v1 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v2 = {d:v1};
// v2 = .object(ofGroup: Object, withProperties: ["__proto__", "d"])
const v5 = [5.0,5.0,5.0,5.0];
// v5 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
function v6(v7,v8) {
    const v12 = [1337,1337];
    // v12 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
    const v16 = new ArrayBuffer(1337);
    // v16 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v19 = v16.slice(1024,1337);
    // v19 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v21 = undefined;
    const v22 = new DataView(v19,v12,v21);
    // v22 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
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
            // v39 = .string + .object(ofGroup: String, withProperties: ["length", "constructor", "__proto__"], withMethods: ["endsWith", "split", "padEnd", "repeat", "lastIndexOf", "substring", "slice", "startsWith", "includes", "charCodeAt", "padStart", "concat", "trim", "replace", "indexOf", "charAt", "codePointAt"])
        }
        v26 = v36;
    } while (v26 < 8);
}
const v40 = v5.sort(v6);
// v40 = .undefined
}
%NeverOptimizeFunction(main);
main();
