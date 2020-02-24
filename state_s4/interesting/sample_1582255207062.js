function main() {
const v3 = 1337 == 13.37;
// v3 = .boolean
let v6 = 0;
for (let v10 = 0; v10 < 3; v10 = v10 + "iterator") {
    let v13 = 0;
    const v14 = v13 + 1;
    // v14 = .primitive
    v13 = v14;
}
}
%NeverOptimizeFunction(main);
main();
