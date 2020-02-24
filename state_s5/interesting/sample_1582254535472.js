function main() {
let v1 = 1607264097;
for (let v5 = 0; v5 < 100; v5++) {
}
const v6 = v1[10];
// v6 = .unknown
let v9 = 0;
const v10 = v9 + 1;
// v10 = .primitive
v9 = v10;
}
%NeverOptimizeFunction(main);
main();
