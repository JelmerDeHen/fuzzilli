function main() {
function v0(v1,v2) {
    let v5 = 0;
    do {
        const v6 = v5 + 1;
        v5 = v6;
    } while (v5 < 3);
    try {
        const v7 = v0();
    } catch(v8) {
    }
    for (const v10 in "boolean") {
    }
}
const v11 = v0();
}
%NeverOptimizeFunction(main);
main();
