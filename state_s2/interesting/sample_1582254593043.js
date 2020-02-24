function main() {
const v2 = Array.__proto__;
// v2 = .unknown
for (let v6 = 0; v6 < 8; v6++) {
    const v7 = v2(v6,8,1337);
    // v7 = .unknown
}
}
%NeverOptimizeFunction(main);
main();
