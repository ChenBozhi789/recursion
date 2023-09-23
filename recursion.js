// 求等差数列第 n 项的值
// A1 = 5, d = 2
// 参数：n:第 n 项
// 返回值：An: 第 n 项的值
function fac(n) { 
    // 防御性代码：检查参数是否非法
    if (n <= 0) {
        throw "Invalid parameter: n must > 0";
    }

    // 递归出口
    if (n == 1) {
        return 5;
    } else if (n > 1) {
        return fac(n-1) + 2;
        // A3 = fac(2) + 2  
        // A2 = fac(1) + 2

        // A3 = fac(1) + 2 + 2
    }
}

console.log("等差数列第 9 项的值为：" + fac(9));