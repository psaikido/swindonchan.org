const cookieTheme = getCookie('theme');

if (cookieTheme != ''){
    $('html').addClass(cookieTheme);
    $('#themeForm input[name=themeRadio][value="' + cookieTheme + '"]')
        .prop('checked', true);
}

$("#themeForm input").on("change", function() {
    const v = $('input[name=themeRadio]:checked', '#themeForm').val();
    setTheme(v);
});

function setTheme(theme) {
    $('html').removeClass('dark');
    $('html').removeClass('light');
    $('html').addClass(theme);
    eraseCookie('theme');
    createCookie('theme', theme, 7);
}

$('#hamburger').on("click", function() {
	$('ul.navbar-nav').toggle();
});
