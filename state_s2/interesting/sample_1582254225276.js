function main() {
if (127) {
} else {
    const v2 = (127)(127,127);
    // v2 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
