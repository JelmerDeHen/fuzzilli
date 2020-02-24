function main() {
try {
    for (const v1 of 0) {
    }
} catch(v2) {
}
}
%NeverOptimizeFunction(main);
main();
