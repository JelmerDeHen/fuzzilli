function main() {
function v0(v1,v2) {
    const v5 = Math.atanh(13.37);
    // v5 = .number
    let v16 = 0;
    let v19 = 0;
    const v20 = v19 + 1;
    // v20 = .primitive
    v19 = v20;
    const v24 = v16 + 1;
    // v24 = .primitive
    v16 = v24;
}
for (let v35 = 0; v35 < 100; v35++) {
    const v36 = v0();
    // v36 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
