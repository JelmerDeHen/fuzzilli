function main() {
const v2 = [1337,1337];
// v2 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
const v6 = new ArrayBuffer(1337);
// v6 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
const v9 = v6.slice(1024,1337);
// v9 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
let v11 = undefined;
const v12 = new DataView(v9,v2,v11);
// v12 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
function v14(v15,v16) {
    let v23 = 0;
    do {
        const v24 = v9.__proto__;
        // v24 = .object()
        const v25 = v23 + 1;
        // v25 = .primitive
        v23 = v25;
    } while (v23 < 6);
    for (let v29 = 0; v29 < 3; v29++) {
    }
    let v30 = 0;
    do {
        const v31 = 3156875969 === "bvEHc.syRe";
        // v31 = .boolean
        let v33 = v31;
        do {
            const v34 = v12.getInt8(0,2454811828);
            // v34 = .integer
            const v35 = v33 + 1;
            // v35 = .primitive
            let v37 = v34;
            while (v37 < -2840146766) {
                const v38 = !v37;
                // v38 = .boolean
                v37 = v38;
            }
            v33 = v35;
        } while (v33 < 7);
        const v39 = v30 + 1;
        // v39 = .primitive
        for (const v41 in "description") {
        }
        v30 = v39;
    } while (v30 < 8);
}
const v43 = [1337];
// v43 = .object(ofGroup: Array, withProperties: ["constructor", "__proto__", "length"], withMethods: ["pop", "flatMap", "push", "values", "toLocaleString", "indexOf", "copyWithin", "lastIndexOf", "find", "unshift", "keys", "toString", "findIndex", "some", "reduceRight", "reduce", "entries", "splice", "shift", "slice", "concat", "fill", "sort", "includes", "forEach", "filter", "every", "join", "flat", "reverse", "map"])
let v44 = v43;
const v45 = v14(v44);
// v45 = .unknown
}
%NeverOptimizeFunction(main);
main();
