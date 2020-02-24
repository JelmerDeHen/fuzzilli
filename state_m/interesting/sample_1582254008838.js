function main() {
const v1 = 0 << 0;
// v1 = .integer
let v4 = 0;
const v5 = v4 + 1;
// v5 = .primitive
v4 = v5;
let v34 = 0;
const v35 = v34 + 1;
// v35 = .primitive
v34 = v35;
let v55 = 0;
const v56 = v55 + 1;
// v56 = .primitive
v55 = v56;
}
%NeverOptimizeFunction(main);
main();
