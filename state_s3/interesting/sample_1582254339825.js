function main() {
let v1 = 1337;
const v2 = v1.__proto__;
// v2 = .unknown
}
%NeverOptimizeFunction(main);
main();
