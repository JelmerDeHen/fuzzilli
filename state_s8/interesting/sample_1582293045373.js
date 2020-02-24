function main() {
try {
    const v3 = new ArrayBuffer(1337);
    // v3 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    const v7 = v3.slice(328125263,1337);
    // v7 = .object(ofGroup: ArrayBuffer, withProperties: ["byteLength", "__proto__"], withMethods: ["slice"])
    let v8 = 1337;
    const v9 = new DataView(v7,-2147483647,v8);
    // v9 = .object(ofGroup: DataView, withProperties: ["__proto__", "byteLength", "byteOffset", "buffer"], withMethods: ["getInt32", "setUint8", "getUint16", "getFloat32", "getUint8", "setFloat32", "setInt32", "setFloat64", "getInt16", "getFloat64", "setUint32", "setInt8", "setInt16", "getInt8", "getUint32", "setUint16"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
