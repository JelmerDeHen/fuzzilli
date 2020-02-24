function main() {
try {
    const v3 = new ArrayBuffer(1337);
    // v3 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v7 = v3.slice(1024,1337);
    // v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v8 = 1337;
    const v9 = new DataView(v7,127,v8);
    // v9 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["getUint8", "setUint32", "setUint16", "setInt16", "getInt8", "getInt16", "getInt32", "setFloat64", "getFloat64", "getFloat32", "setInt8", "setInt32", "getUint16", "setUint8", "setFloat32", "getUint32"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
