function main() {
let v2 = 0;
while (v2 < 1337) {
    const v3 = v2 + 1;
    // v3 = .primitive
    let v6 = v3;
    const v7 = Math.pow(v6,7);
    // v7 = .number
    const v8 = v2[v7];
    // v8 = .unknown
    let v11 = 0;
    const v12 = v11 + 1;
    // v12 = .primitive
    v11 = v12;
    v2 = v3;
}
}
%NeverOptimizeFunction(main);
main();
