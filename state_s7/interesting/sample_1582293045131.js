function main() {
try {
    const v3 = new ArrayBuffer(1337);
    // v3 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v7 = v3.slice(328125263,1337);
    // v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v8 = 1337;
    const v9 = new DataView(v7,-2147483647,v8);
    // v9 = .object(ofGroup: DataView, withProperties: ["buffer", "__proto__", "byteOffset", "byteLength"], withMethods: ["setInt32", "getFloat32", "getFloat64", "setInt8", "getUint32", "setInt16", "getUint16", "getInt8", "getUint8", "setFloat64", "getInt32", "setUint8", "getInt16", "setUint32", "setUint16", "setFloat32"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
