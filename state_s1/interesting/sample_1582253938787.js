function main() {
for (let v9 = 0; v9 < 10; v9++) {
    break;
}
}
%NeverOptimizeFunction(main);
main();
