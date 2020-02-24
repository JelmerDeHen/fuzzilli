function main() {
function v0(v1,v2) {
    v0.prototype = 1337;
}
const v4 = v0();
// v4 = .unknown
const v5 = v0();
// v5 = .unknown
}
%NeverOptimizeFunction(main);
main();
