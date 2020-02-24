function main() {
let v5 = 0;
try {
    let v8 = 0;
    const v10 = new DataView("boolean",8,1337);
    // v10 = .object(ofGroup: DataView, withProperties: ["byteLength", "byteOffset", "__proto__", "buffer"], withMethods: ["getUint8", "setUint8", "setInt16", "setUint16", "getUint32", "setFloat32", "getInt8", "setFloat64", "getInt32", "setInt8", "getFloat32", "setInt32", "setUint32", "getInt16", "getUint16", "getFloat64"])
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
