function main() {
let v2 = 0;
while (v2 < 1337) {
    const v3 = v2 + 1;
    // v3 = .primitive
    let v6 = v3;
    const v7 = Math.pow(v6,9);
    // v7 = .number
    const v8 = v2[v7];
    // v8 = .unknown
    v2 = v3;
}
}
%NeverOptimizeFunction(main);
main();
