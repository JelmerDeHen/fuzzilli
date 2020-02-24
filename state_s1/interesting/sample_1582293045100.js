function main() {
try {
    const v3 = new ArrayBuffer(1337);
    // v3 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v7 = v3.slice(328125263,1337);
    // v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v8 = 1337;
    const v9 = new DataView(v7,-2147483647,v8);
    // v9 = .object(ofGroup: DataView, withProperties: ["byteOffset", "buffer", "byteLength", "__proto__"], withMethods: ["setInt8", "setUint8", "setUint16", "setFloat64", "getUint16", "setInt32", "getFloat32", "setUint32", "getInt32", "getFloat64", "getInt16", "getInt8", "getUint8", "getUint32", "setInt16", "setFloat32"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
