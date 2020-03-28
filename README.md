# nextjs-and-passportjs
Basic Facebook and Google login example for NextJS using PassportJS.

## Getting Started

The .env file is needed for the project to work. Create a .env file in the project directory and fill the following variables with your Facebook/Google app settings.

```
SESSION_SECRET=my-session-secret

FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
FACEBOOK_CALLBACK_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback
```

### Go to the project directory and run:

```bash
npm install
npm run dev
```
