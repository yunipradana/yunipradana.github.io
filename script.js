for (let i = 9; i >= 1; i--) {
  document.write(`<button class=tombol onclick=display(${i})>` + i + `</button>`);
}

let result = document.getElementById('screen');
const display = (a) => {
  if (a == 'clear') {
    result.value = '';
  } else if (a == 'Del') {
    result.value = result.value.slice(0, -1);
  } else if (a == 'action') {
      try {
        result.value = eval(result.value);
      } catch (error) {
          alert('error')
      }
    
  } else {
    result.value += a;
  }
};
