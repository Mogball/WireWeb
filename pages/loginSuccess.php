<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <title>Vire AR-payment</title>

    <!-- CSS  -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="../css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
    <link href="../css/style.css" type="text/css" rel="stylesheet" media="screen,projection"/>

    <script src="../js/jquery/jquery.js"></script>
</head>

<body>
<nav class="indigo darken-1 header-block" role="navigation">
    <div class="nav-wrapper container">
        <a href="../" class="header-logo">Vire</a>
        <div class="side-nav-btn-cnt">
            <a href="#" data-activates="nav-mobile" class="menu-button-collapse waves-effect">
                <i class="material-icons header-nav-menu">menu</i>
            </a>
        </div>
        <ul class="header-nav-btns right header-nav-btns-btn">
            <li><a class="btn waves-effect waves-light header-btn"
                   href="/pages/register.html"><p>Sign up</p></a></li>
            <li><a class="btn waves-effect waves-light header-btn"
                   href="/pages/login.html"><p>Log in</p></a></li>
        </ul>
        <ul class="header-nav-btns right">
            <li><a class="header-nav-btn waves-effect" href="/pages/features.html">Features</a></li>
            <li><a class="header-nav-btn waves-effect" href="/pages/services.html">Services</a></li>
            <li><a class="header-nav-btn waves-effect" href="/pages/company.html">Company</a></li>
            <li><a class="header-nav-btn waves-effect" href="/pages/career.html">Career</a></li>
        </ul>
        <ul class="side-nav" id="nav-mobile">
            <li><a class="waves-effect" href="../#">Home</a></li>
            <li><a class="waves-effect" href="../pages/features.html">Features</a></li>
            <li><a class="waves-effect" href="../pages/services.html">Services</a></li>
            <li><a class="waves-effect" href="../pages/company.html">Company</a></li>
            <li><a class="waves-effect" href="../pages/career.html">Career</a></li>
            <li><a class="waves-effect" href="../pages/register.html">Sign Up</a></li>
            <li><a class="waves-effect" href="../pages/login.html">Log In</a></li>
        </ul>
    </div>
</nav>

<div class="section">
    <div class="container">
        <div class="row center">
            <div class="col m3 s1"></div>
            <div class="col m6 s10"
                 style="min-height: 400px; display: flex; flex-direction: column;justify-content: center">
                <h4>Login successful</h4>
                <?php
                function get_postParam($index)
                {
                    if (array_key_exists($index, $_POST)) {
                        return $_POST[$index];
                    } else {
                        return "";
                    }
                }

                echo sprintf("%s<br>%s<br>%s %s<br>%s %s %s<br> %s %s %s<br>",
                    get_postParam('email_address'), get_postParam('phone_number'),
                    get_postParam('first_name'), get_postParam('last_name'),
                    get_postParam('country'), get_postParam('state'), get_postParam('city'),
                    get_postParam('birthdate-year'), get_postParam('birthdate_month'), get_postParam('birthdate_day'));
                ?>
            </div>
            <div class="col m3 s1"></div>
        </div>
    </div>
</div>

<footer class="page-footer indigo">
    <div class="container">
        <div class="section">
            <div class="row">
                <div class="col m3">
                    <h4 class="footer-title"><a class="footer-page-link" href="../index.html">Vire</a></h4>
                    <ul class="footer-feature-service-list">
                        <li><a class="footer-page-link" href="../pages/features.html">Features</a></li>
                        <li><a class="footer-page-link" href="../pages/services.html">Services</a></li>
                    </ul>
                </div>
                <div class="col m9">
                    <div class="row">
                        <div class="col m4">
                            <div class="footer-border">
                                <h5 class="footer-category-label">Developers</h5>
                            </div>
                            <ul>
                                <li><a class="footer-page-link" href="#">Get started</a></li>
                                <li><a class="footer-page-link" href="#">API</a></li>
                                <li><a class="footer-page-link" href="#">Documentation</a></li>
                                <li><a class="footer-page-link" href="#">Open source</a></li>
                            </ul>
                        </div>
                        <div class="col m4">
                            <div class="footer-border">
                                <h5 class="footer-category-label">Company</h5>
                            </div>
                            <ul>
                                <li><a class="footer-page-link" href="../pages/company.html#about-us">About</a></li>
                                <li><a class="footer-page-link" href="../pages/company.html#support">Support</a></li>
                                <li><a class="footer-page-link" href="../pages/company.html#contact">Contact</a></li>
                                <li><a class="footer-page-link" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div class="col m4">
                            <div class="footer-border">
                                <h5 class="footer-category-label">Resources</h5>
                            </div>
                            <ul>
                                <li><a class="footer-page-link" href="#">Sitemap</a></li>
                                <li><a class="footer-page-link" href="#">Privacy</a></li>
                                <li><a class="footer-page-link" href="#">Terms</a></li>
                                <li><a class="footer-page-link" href="#">Legal</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-copyright indigo darken-1">
        <div class="container">
            © Vire
        </div>
    </div>
</footer>


<!-- Page -->
<script src="../js/register.js"></script>
<!-- Scripts -->
<script src="../js/materialize.js"></script>
<script src="../js/init.js"></script>
<script src="../js/initHtml.js"></script>

</body>
</html>
