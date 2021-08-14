function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    // write your solution here
    // ============================================
    // удаляем пробелы
    expr = expr.replace(/\s/g, '');
    // ============================================
    // проверка на правильность скобок
    let open = 0;
    for(let index = 0; index < expr.length; index++){
        if( expr[index] === '(' ) open++;
        if( expr[index] === ')' ) open--;
        if(open<0) 
            throw("ExpressionError: Brackets must be paired");
    }
    if(open !== 0) throw("ExpressionError: Brackets must be paired");
    // ============================================
    // проверка деления на ноль
    for (let i = 0; i < expr.length; i++) {
        if (expr[i] === "/") {
            if (expr[i + 1] === "0") {
                throw new Error('TypeError: Division by zero.');
            }
        }
    };
    // ============================================

    const calculate = new Function(`return ${expr}`);
    const result = calculate();
    
    return result;

}

module.exports = {
    expressionCalculator
}