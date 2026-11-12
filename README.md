# Animated Login / Register UI

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/animated-login-register-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive recreation of the split-screen login and sign-up interface shown in the supplied video.

## Run locally

No build step or npm dependencies are required.

```bash
cd animated-login-register
python -m http.server 8000
```

Open http://localhost:8000 in your browser, or open `index.html` directly.

## Files

- `index.html` — sign-in and create-account forms, social provider buttons and animated overlay panels
- `style.css` — split-screen layout, navy overlay, transitions, responsive mobile layout
- `script.js` — panel switching, client-side validation and demo interaction messages

## Implemented behavior

- Sign In / Sign Up panel animation
- Email and password validation
- Create-account form validation
- Forgot-password demo flow
- Google, Facebook, GitHub and LinkedIn button feedback
- Responsive layout for small screens

## Production notes

This is a front-end recreation. It does not create accounts, authenticate users, send password-reset emails, or perform OAuth. Connect a secure backend and configure OAuth providers before production deployment.

The supplied video shows the UI and small CSS source panels, but the code text is too small to transcribe reliably. This project reconstructs the visible design and behavior rather than claiming a verbatim copy of the original source.
