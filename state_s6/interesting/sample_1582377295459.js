function main() {
let v2 = 0;
while (v2 < 1337) {
    const v3 = v2 + 1;
    // v3 = .primitive
    let v6 = v3;
    const v7 = Math.pow(v6,-1024);
    // v7 = .number
    v2 = v3;
}
}
%NeverOptimizeFunction(main);
main();
