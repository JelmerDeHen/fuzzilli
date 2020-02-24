function main() {
for (let v142 = 0; v142 < 0; v142++) {
    throw v142;
}
}
%NeverOptimizeFunction(main);
main();
