function main() {
for (let v146 = 0; v146 < 0; v146--) {
    throw v146;
}
}
%NeverOptimizeFunction(main);
main();
