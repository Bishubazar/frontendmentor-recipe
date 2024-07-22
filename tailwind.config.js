/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                stone: {
                    100: "hsl(30, 54%, 90%)",
                    150: "hsl(30, 18%, 87%)",
                    600: "hsl(30, 10%, 34%)",
                    900: "hsl(24, 5%, 18%)",
                },
                brown: "hsl(14, 45%, 36%)",
                "rose-dark": "hsl(332, 51%, 32%)",
                "rose-light": "hsl(330, 100%, 98%)",
            },
        },
    },
    plugins: [],
};
