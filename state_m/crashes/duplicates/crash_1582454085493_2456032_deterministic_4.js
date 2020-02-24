function main() {
function v1(v2,v3) {
    let v6 = 0;
    do {
        const v7 = v6 + 1;
        v6 = v7;
    } while (v6 < 8);
    for (const v8 of "string") {
        const v9 = v1();
    }
}
const v10 = v1();
}
%NeverOptimizeFunction(main);
main();
