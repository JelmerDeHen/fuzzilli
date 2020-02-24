function main() {
function v1(v2,v3,v4,v5,...v6) {
    delete arguments[0];
}
const v8 = v1(1337);
// v8 = .unknown
}
%NeverOptimizeFunction(main);
main();
