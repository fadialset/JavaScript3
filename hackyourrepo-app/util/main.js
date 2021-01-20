function main() {
  creatSelectOptions(url);
  select.addEventListener('change', (e) => {
    selectRepo(e.target.value);   
    
})
};