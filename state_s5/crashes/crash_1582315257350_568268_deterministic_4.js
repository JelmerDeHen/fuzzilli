function main() {
function v0(v1,v2) {
    let v5 = 0;
    do {
        const v6 = v5 + 1;
        v5 = v6;
    } while (v5 < 4);
    const v8 = [13.37,13.37,13.37,13.37];
    for (const v9 of v8) {
        const v10 = v0();
    }
}
const v11 = v0();
}
%NeverOptimizeFunction(main);
main();
