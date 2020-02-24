function main() {
const v1 = [1337,1337];
function v2(v3,v4) {
    for (let v8 = 0; v8 < 10; v8++) {
    }
    for (const v9 of v1) {
        const v10 = v2();
    }
}
const v11 = v2();
}
%NeverOptimizeFunction(main);
main();
