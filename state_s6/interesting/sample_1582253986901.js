function main() {
const v3 = 1337 == 13.37;
// v3 = .boolean
for (let v7 = 0; v7 < 3; v7++) {
    const v8 = v7[v7];
    // v8 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
