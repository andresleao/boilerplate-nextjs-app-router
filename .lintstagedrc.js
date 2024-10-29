module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `eslint --fix ${filenames.join(' ')}`,
  ]
};

  //TESTE
   //`npm test -- --findRelatedTests ${filenames.join(' ')}`
