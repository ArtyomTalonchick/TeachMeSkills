const inputX = document.body.children[0];
const inputN = document.body.children[1];
const result = document.body.children[2];

const handleChange = () => {
    const x = +inputX.value;
    const n = +inputN.value;
    result.innerHTML = pow(x, n);
};

inputX.addEventListener("change", handleChange);
inputN.addEventListener("change", handleChange);