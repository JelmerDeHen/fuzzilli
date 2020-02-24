function main() {
with ("MIN_VALUE") {
    const v4 = matchAll();
    // v4 = .unknown
    v4[matchAll] = 0;
}
}
%NeverOptimizeFunction(main);
main();
