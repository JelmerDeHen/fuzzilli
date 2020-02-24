function main() {
const v1 = [1337];
function v2(v3,v4) {
    let v7 = 0;
    do {
        const v8 = v7 + 1;
        v7 = v8;
    } while (v7 < 8);
    for (const v9 of v1) {
        const v10 = v2();
    }
}
const v11 = v2();
}
%NeverOptimizeFunction(main);
main();
