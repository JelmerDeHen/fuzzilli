function main() {
function v0(v1,v2) {
    for (let v11 = 0; v11 === 1; v11++) {
    }
    let v14 = 0;
    let v17 = 0;
    const v18 = v17 + 1;
    // v18 = .primitive
    v17 = v18;
    let v21 = 0;
    const v25 = v14 + 1;
    // v25 = .primitive
    v14 = v25;
}
for (let v29 = 0; v29 < 100; v29++) {
    const v30 = v0();
    // v30 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
