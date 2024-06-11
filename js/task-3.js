function getElementWidth(content, padding, border) {
    return Namber.parseFloat(content) + (Namber.parseFloat(padding) * 2) + (Namber.parseFloat(border) * 2);
}

console.log(getElementWidth("50px", "8px", "4px")); 
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px")); 


// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200