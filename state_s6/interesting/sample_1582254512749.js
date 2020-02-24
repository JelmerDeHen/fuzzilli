function main() {
let v5 = 0;
try {
    let v8 = 0;
    const v10 = new DataView("boolean",8,1337);
    // v10 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
} catch(v11) {
    let v14 = 0;
    const v18 = v14 + 1;
    // v18 = .primitive
    v14 = v18;
}
const v19 = v5 + 1;
// v19 = .primitive
v5 = v19;
}
%NeverOptimizeFunction(main);
main();
