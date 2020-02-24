function main() {
for (const v2 of "boolean") {
    for (let v5 = 0; v5 < 6; v5 = v5 + v2) {
    }
}
}
%NeverOptimizeFunction(main);
main();
