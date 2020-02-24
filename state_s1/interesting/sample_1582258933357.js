function main() {
let v5 = 0;
const v7 = (1337).__proto__;
// v7 = .unknown
const v9 = v7.toLocaleString(3603679119);
// v9 = .unknown
const v10 = v5 + 1;
// v10 = .primitive
v5 = v10;
}
%NeverOptimizeFunction(main);
main();
