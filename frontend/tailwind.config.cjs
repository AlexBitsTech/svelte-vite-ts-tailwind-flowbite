const colors = require('tailwindcss/colors');

const config = {
    content: [
      "./src/**/*.{html,js,svelte,ts}",
      "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
  
    theme: {
      extend: {
          colors: {
              
          } 
      },
    },
  
    plugins: [
      require('flowbite/plugin')
    ],
  };
  
  module.exports = config;