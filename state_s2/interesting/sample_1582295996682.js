function main() {
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v8 = v4.slice(1024,1337);
    // v8 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v9 = -652415907;
    const v10 = new DataView(v8,127,v9);
    // v10 = .object(ofGroup: DataView, withProperties: ["byteOffset", "byteLength", "__proto__", "buffer"], withMethods: ["getInt16", "getUint32", "setFloat32", "getUint8", "setUint8", "setInt8", "setInt32", "setFloat64", "getUint16", "getInt32", "getFloat64", "setInt16", "setUint16", "setUint32", "getFloat32", "getInt8"])
} catch(v11) {
}
}
%NeverOptimizeFunction(main);
main();
