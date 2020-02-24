function main() {
let v23 = 0;
let v25 = 0;
const v26 = v25 + 1;
// v26 = .primitive
const v27 = v23 + 1;
// v27 = .primitive
v23 = v27;
}
%NeverOptimizeFunction(main);
main();
