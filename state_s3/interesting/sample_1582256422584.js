function main() {
function v0(v1,v2) {
    for (const v4 in "object") {
        const v5 = v4 - 1;
        // v5 = .primitive
    }
}
for (let v9 = 0; v9 < 100; v9++) {
    const v10 = v0();
    // v10 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
