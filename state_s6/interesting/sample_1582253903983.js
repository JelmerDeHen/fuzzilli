function main() {
"iterator".__proto__ = "iterator";
}
%NeverOptimizeFunction(main);
main();
