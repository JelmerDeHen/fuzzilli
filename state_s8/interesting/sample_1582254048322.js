function main() {
let v6 = 0;
for (const v7 in "boolean") {
    let v10 = v7;
    do {
        let v11 = 0;
        let v14 = 0;
        const v15 = v14 + 1;
        // v15 = .primitive
        v14 = v15;
        let v17 = v11;
        const v21 = v10 + 1;
        // v21 = .primitive
        v10 = v21;
    } while (v10 < 8);
}
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
v25 = v26;
}
%NeverOptimizeFunction(main);
main();
