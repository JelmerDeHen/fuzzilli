function main() {
try {
    const v2 = JSON.parse(Float32Array);
    // v2 = .unknown
} catch(v3) {
}
}
%NeverOptimizeFunction(main);
main();
