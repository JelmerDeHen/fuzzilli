function main() {
let v2 = 0;
while (v2 < 1337) {
    let v5 = 0;
    const v6 = v2 + 1;
    // v6 = .primitive
    let v9 = v6;
    const v10 = Math.pow(v9,7);
    // v10 = .number
    const v11 = Math.cos(v10);
    // v11 = .number
    v2 = v6;
}
}
%NeverOptimizeFunction(main);
main();
