function main() {
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v8 = v4.slice(1024,4294967297);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v9 = 3471723921;
    const v10 = new DataView(v8,127,v9);
    // v10 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "__proto__", "byteLength"], withMethods: ["getUint8", "getInt8", "getInt32", "setInt16", "setFloat32", "getFloat64", "getUint32", "setInt32", "getInt16", "setUint8", "getUint16", "setUint32", "setInt8", "setUint16", "getFloat32", "setFloat64"])
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();
