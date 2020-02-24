function main() {
function v0(v1,v2) {
    for (const v4 of "number") {
        let v7 = 0;
        while (v7 < 1337) {
            const v8 = v7 + 1;
            v7 = v8;
        }
        const v9 = v0();
    }
}
const v10 = v0();
}
%NeverOptimizeFunction(main);
main();
