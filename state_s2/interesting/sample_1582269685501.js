function main() {
let v4 = 0;
do {
    let v7 = 0;
    const v8 = v7 + 1;
    // v8 = .primitive
    v7 = v8;
    const v9 = v4 + 1;
    // v9 = .primitive
    v4 = v9;
} while (v4 < 8);
const v10 = Math.atan2(v4,13.37);
// v10 = .number
}
%NeverOptimizeFunction(main);
main();
