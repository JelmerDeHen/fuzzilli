function main() {
const v2 = (1337).__proto__;
// v2 = .unknown
let v5 = 0;
const v6 = v2.toLocaleString(0);
// v6 = .unknown
const v7 = v5 + 1;
// v7 = .primitive
v5 = v7;
const v9 = gc();
// v9 = .undefined
}
%NeverOptimizeFunction(main);
main();
