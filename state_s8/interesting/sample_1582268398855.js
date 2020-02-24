function main() {
try {
    const v2 = Uint8ClampedArray(63678);
    // v2 = .unknown
} catch(v3) {
    const v4 = v3.__proto__;
    // v4 = .unknown
    const v5 = v4 <= v4;
    // v5 = .boolean
}
}
%NeverOptimizeFunction(main);
main();
