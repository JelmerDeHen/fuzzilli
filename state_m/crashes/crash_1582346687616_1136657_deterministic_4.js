function main() {
const v1 = [1337,1337,1337];
const v3 = [1337,1337];
function v4(v5,v6) {
    let v9 = -2;
    while (v9 < 1337) {
        const v10 = v9 + 1;
        v9 = v10;
    }
    for (const v11 of v3) {
        const v12 = v1.forEach(v4);
    }
}
const v13 = v4();
}
%NeverOptimizeFunction(main);
main();
