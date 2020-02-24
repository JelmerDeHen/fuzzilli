function main() {
const v1 = [13.37];
const v3 = [1337,1337,1337,1337,1337];
function v4(v5,v6) {
    let v9 = 0;
    do {
        const v10 = v9 + 1;
        v9 = v10;
    } while (v9 < 6);
    for (const v11 of v1) {
        const v12 = v4();
    }
}
const v13 = v3.forEach(v4);
}
%NeverOptimizeFunction(main);
main();
