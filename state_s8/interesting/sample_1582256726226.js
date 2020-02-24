function main() {
function v0(v1,v2) {
    let v8 = 0;
    const v9 = v8 + 1;
    // v9 = .primitive
    const v10 = "object" >> v9;
    // v10 = .integer
}
for (let v14 = 0; v14 < 100; v14++) {
    const v15 = v0();
    // v15 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
