function main() {
let v50 = 0;
const v51 = v50 + 1;
// v51 = .primitive
v50 = v51;
const v52 = 1337 / 3;
// v52 = .number
}
%NeverOptimizeFunction(main);
main();
