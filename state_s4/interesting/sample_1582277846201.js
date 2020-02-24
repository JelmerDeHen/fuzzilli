function main() {
try {
    const v2 = new ArrayBuffer(-256);
    // v2 = .object(ofGroup: ArrayBuffer, withProperties: ["__proto__", "byteLength"], withMethods: ["slice"])
} catch(v3) {
}
}
%NeverOptimizeFunction(main);
main();
