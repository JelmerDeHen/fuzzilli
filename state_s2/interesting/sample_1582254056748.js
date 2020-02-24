function main() {
let v3 = 0;
const v4 = "pvU0UUjoya".length;
// v4 = .integer
const v5 = v3 + 1;
// v5 = .primitive
v3 = v5;
}
%NeverOptimizeFunction(main);
main();
