function main() {
try {
    const v3 = new ArrayBuffer(1337);
    // v3 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    const v7 = v3.slice(328125263,1337);
    // v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    let v8 = 1337;
    const v9 = new DataView(v7,-2147483647,v8);
    // v9 = .object(ofGroup: DataView, withProperties: ["__proto__", "buffer", "byteLength", "byteOffset"], withMethods: ["setUint32", "getUint16", "setUint8", "getInt16", "getInt32", "getFloat32", "setInt32", "setFloat32", "setUint16", "setFloat64", "setInt16", "getFloat64", "getUint8", "getUint32", "getInt8", "setInt8"])
} catch(v10) {
}
}
%NeverOptimizeFunction(main);
main();
