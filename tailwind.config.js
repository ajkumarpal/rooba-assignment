/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", 
  "./node_modules/flowbite/**/*.js",
  "./node_modules/tw-elements/js/**/*.js"

  ],
  theme: {
    extend: {
      colors: {
        custom: {
          'LEFT': '#15181b',
          'RIGHT': "#15181b",
          "MIDDLE":"#b9a0ff"
        },
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],

}

