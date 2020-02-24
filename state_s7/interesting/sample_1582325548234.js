function main() {
const v1 = -784019301 + 1;
// v1 = .primitive
try {
    const v4 = new ArrayBuffer(1337);
    // v4 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
    v4.constructor = v1;
    const v7 = v4.slice(1024,1337);
    // v7 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
} catch(v8) {
}
}
%NeverOptimizeFunction(main);
main();
