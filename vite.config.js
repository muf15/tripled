import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'public/index.html',
        aboutUs: 'public/about-us.html',
        courses: 'public/courses.html',
        internship: 'public/internship.html',
        contactUs: 'public/contact-us.html',
      },
    },
  },
});
