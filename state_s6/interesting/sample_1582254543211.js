function main() {
const v20 = "object".constructor;
// v20 = .function()
const v30 = 1337 == 13.37;
// v30 = .boolean
const v36 = Object();
// v36 = .object()
const v40 = v20(28499,"object",v20,13.37,v36);
// v40 = .unknown
}
%NeverOptimizeFunction(main);
main();
