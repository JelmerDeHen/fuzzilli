function main() {
const v0 = {};
// v0 = .object(ofGroup: Object, withProperties: ["__proto__"])
const v2 = [13.37,13.37,13.37,13.37];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v5 = 0;
let v10 = 0;
let v12 = 0;
const v15 = [1337,1337];
// v15 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
const v19 = new ArrayBuffer(1337);
// v19 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v22 = v19.slice(1024,1337);
// v22 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v24 = undefined;
const v25 = new DataView(v22,v15,v24);
// v25 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
function v27(v28,v29) {
    let v32 = 0;
    do {
        const v33 = v25.getUint16(0,2454811828);
        // v33 = .integer
        let v35 = v33;
        while (v35 < 1) {
            const v36 = !v35;
            // v36 = .boolean
            const v37 = v2.constructor;
            // v37 = .object(ofGroup: Function, withProperties: ["caller", "prototype", "__proto__", "name", "arguments", "length", "constructor"], withMethods: ["bind", "apply", "call"]) + .function([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])) + .constructor([.integer] => .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"]))
            const v38 = {b:v37,d:v35,a:v36};
            // v38 = .object(ofGroup: Object, withProperties: ["d", "__proto__", "a"], withMethods: ["b"])
            v35 = v36;
        }
        const v39 = v32 + 1;
        // v39 = .primitive
        for (const v41 in "description") {
        }
        v32 = v39;
    } while (v32 < 8);
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["forEach", "filter", "unshift", "slice", "splice", "reverse", "reduce", "join", "reduceRight", "some", "pop", "copyWithin", "concat", "flatMap", "shift", "push", "lastIndexOf", "fill", "entries", "sort", "includes", "map", "toString", "values", "indexOf", "keys", "every", "flat", "toLocaleString", "find", "findIndex"])
let v44 = v43;
const v45 = v27(v44);
// v45 = .unknown
const v46 = v27();
// v46 = .unknown
}
%NeverOptimizeFunction(main);
main();
