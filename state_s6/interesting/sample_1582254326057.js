function main() {
let v7 = 0;
const v8 = v7 + 1;
// v8 = .primitive
v7 = v8;
let v11 = 0;
while (v11 != 10) {
    const v14 = v11 + 1;
    // v14 = .primitive
    v11 = v14;
}
}
%NeverOptimizeFunction(main);
main();
