const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')



/******************* == PassportJS == *******************/
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, FACEBOOK_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_CALLBACK_URL, SESSION_SECRET } = process.env;

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: FACEBOOK_CALLBACK_URL
},
    function (accessToken, refreshToken, profile, done) {
        //Call your API for find or creation.
        return done(null, { profile });
    }
));

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL
},
    function (accessToken, refreshToken, profile, done) {
        //Call your API for find or creation.
        return done(null, { profile });
    }
));

passport.serializeUser(function (user, done) {
    //Save user object to session.
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    //Set user to req.user.
    done(null, user);
});


/******************* == Prepare Server == *******************/
app.prepare().then(() => {
    const server = express();

    server.use(cookieParser());
    server.use(session({
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 365 * 24 * 60 * 60 //=> cookie expires in 365 days
        },
        resave: true,
        saveUninitialized: true
    }))
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(passport.initialize());
    server.use(passport.session());


    /******************* == Facebook == *******************/
    // Redirect the user to Facebook for authentication.  When complete,
    // Facebook will redirect the user back to the application at
    // /auth/facebook/callback
    server.get('/auth/facebook', passport.authenticate('facebook', { scope: ['user_gender'] }));

    // Facebook will redirect the user to this URL after approval.  Finish the
    // authentication process by attempting to obtain an access token.  If access was granted, the user will be logged in.  Otherwise, authentication has failed.
    server.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/user',
        failureRedirect: '/auth/login'
    }));


    /******************* == Google == *******************/
    // Use passport.authenticate() as route middleware to authenticate the
    // request.  The first step in Google authentication will involve redirecting the user to google.com.  After authorization, Google will redirect the user back to this application at /auth/google/callback
    server.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

    // Use passport.authenticate() as route middleware to authenticate the
    // request.  If authentication fails, the user will be redirected back to the login page.  Otherwise, the primary route function function will be called, which, in this example, will redirect the user to the home page.
    server.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
        function (req, res) {
            res.redirect('/user');
        });


    /******************* == App Routes == *******************/
    server.all('/login', (req, res) => {
        return app.render(req, res, '/Auth/Login', req.query)
    });

    server.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    });

    server.all('/user', (req, res) => {
        if (!req.isAuthenticated()) {
            return res.redirect('/login');
        }
        return app.render(req, res, '/User', req.query)
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    });
});