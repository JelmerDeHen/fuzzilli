function main() {
Reflect[4256045130] = 9007199254740993;
Reflect.e = Reflect;
const v16 = typeof 1337;
// v16 = .string
let v23 = 0;
const v24 = v23 + 1;
// v24 = .primitive
v23 = v24;
}
%NeverOptimizeFunction(main);
main();
