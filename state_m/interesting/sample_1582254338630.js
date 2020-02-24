function main() {
for (let v7 = 0; v7 < 3; v7++) {
    for (let v12 = 0; v12 < 6; v12++) {
    }
    let v14 = 0;
    while (v14 < 9) {
        const v15 = v14 + 1;
        // v15 = .primitive
        v14 = v15;
    }
}
let v19 = 0;
const v20 = v19 + 1;
// v20 = .primitive
v19 = v20;
let v23 = 0;
while (v23 < 7) {
    const v24 = v23 + 1;
    // v24 = .primitive
    v23 = v24;
}
const v25 = "iterator"[6];
// v25 = .unknown
}
%NeverOptimizeFunction(main);
main();
