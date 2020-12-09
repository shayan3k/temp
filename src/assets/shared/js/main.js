!function (a, b, c) { a.ripple = function (d, e) { var f = this, g = f.log = function () { f.defaults.debug && console && console.log && console.log.apply(console, arguments) }; f.selector = d, f.defaults = { debug: !1, on: "mousedown", opacity: .4, color: "auto", multi: !1, duration: .7, rate: function (a) { return a }, easing: "linear" }, f.defaults = a.extend({}, f.defaults, e); var h = function (b) { var d, e, h = a(this); if (h.addClass("has-ripple"), e = a.extend({}, f.defaults, h.data()), e.multi || !e.multi && 0 === h.find(".ripple").length) { if (d = a("<span></span>").addClass("ripple"), d.appendTo(h), g("Create: Ripple"), !d.height() && !d.width()) { var i = c.max(h.outerWidth(), h.outerHeight()); d.css({ height: i, width: i }), g("Set: Ripple size") } if (e.rate && "function" == typeof e.rate) { var j = c.round(d.width() / e.duration), k = e.rate(j), l = d.width() / k; e.duration.toFixed(2) !== l.toFixed(2) && (g("Update: Ripple Duration", { from: e.duration, to: l }), e.duration = l) } var m = "auto" == e.color ? h.css("color") : e.color, n = { animationDuration: e.duration.toString() + "s", animationTimingFunction: e.easing, background: m, opacity: e.opacity }; g("Set: Ripple CSS", n), d.css(n) } e.multi || (g("Set: Ripple Element"), d = h.find(".ripple")), g("Destroy: Ripple Animation"), d.removeClass("ripple-animate"); var o = b.pageX - h.offset().left - d.width() / 2, p = b.pageY - h.offset().top - d.height() / 2; e.multi && (g("Set: Ripple animationend event"), d.one("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function () { g("Note: Ripple animation ended"), g("Destroy: Ripple"), a(this).remove() })), g("Set: Ripple location"), g("Set: Ripple animation"), d.css({ top: p + "px", left: o + "px" }).addClass("ripple-animate") }; a(b).on(f.defaults.on, f.selector, h) } }(jQuery, document, Math); $.ripple.version = "1.2.1";

var Mansour = Mansour || {};
Mansour.default = Mansour.default || {};
Mansour.default.init = function () {
    try {
        $(document).on("click", '[href="#"]', function (e) {
            e.preventDefault();
        });
        window.rippler = $.ripple('[data-ripple="ripple"], .area', {
            debug: true,
            multi: true,
        });

        function copyToClipboard() {
            var copyText = document.getElementById("userUrl");
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
            alert("آدرس کپی شده: " + copyText.value);
        }

        var copyBtn = document.getElementById('copyUrl');
        copyBtn.addEventListener('click', copyToClipboard);


    } catch (e) {
        console.log('Error on Mansour.default.init' + e);
    }
}

Mansour.fileUpload = Mansour.fileUpload || {};
Mansour.fileUpload.init = function () {
    try {
        function custom_file_uplaod(inputFile, customButton, customText) {
            const realFileBtn = document.getElementById(inputFile);
            const customBtn = document.getElementById(customButton);
            const customTxt = document.getElementById(customText);

            customBtn.addEventListener("click", function () {
                realFileBtn.click();
            });

            realFileBtn.addEventListener("change", function () {
                if (realFileBtn.value) {
                    customTxt.innerHTML = realFileBtn.value.match(
                        /[\/\\]([\w\d\s\.\-\(\)]+)$/
                    )[1];
                } else {
                    customTxt.innerHTML = "هنوز فایلی انتخاب نشده...";
                }
            });
        }

        custom_file_uplaod('avatarFileInput', 'avatarBtn', 'avatarTxt');
        custom_file_uplaod('meliCardFileInput', 'meliCardBtn', 'meliCardTxt');

    } catch (e) {
        console.log('Error on Mansour.fileUpload.init' + e);
    }
}

Mansour.fullScreen = Mansour.fullScreen || {};
Mansour.fullScreen.init = function () {
    try {
        var elem = document.documentElement;

        function openFullscreen() {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
        }

        var fullBtn = document.getElementById('fullScreenButton');
        fullBtn.addEventListener('click', function () {
            openFullscreen();
        })

    } catch (e) {
        console.log('Error on Mansour.fullScreen.init' + e);
    }
}

Mansour.notification = Mansour.notification || {};
Mansour.notification.init = function () {
    try {
        function showInfo() {
            iziToast.info({
                title: 'سلام!',
                message: 'به منشور پلاس خوش آومدین',
                rtl: true,
                position: 'topRight',
            });
        }

        function showSuccess() {
            iziToast.success({
                title: 'موفقیت آمیز!',
                message: 'اطلاعات شما با موفقیت ذخیره شد',
                rtl: true,
                position: 'topCenter',
            });
        }

        function showWarning() {
            iziToast.warning({
                title: 'هشدار!',
                message: 'فراموش کردید کارت ملی خودتون رو آپلود کنید',
                rtl: true,
                position: 'topRight',
            });
        }

        function showDanger() {
            iziToast.error({
                title: 'خطا!',
                message: 'پسورد شما کمتر از ۸ کاراکتر است',
                rtl: true,
                position: 'bottomRight',
            });
        }

        document.getElementById('showInfo').addEventListener('click', showInfo);
        document.getElementById('showSuccess').addEventListener('click', showSuccess);
        document.getElementById('showWarning').addEventListener('click', showWarning);
        document.getElementById('showDanger').addEventListener('click', showDanger);

    } catch (e) {
        console.log('Error on Mansour.notification.init' + e);
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    Mansour.default.init();
    Mansour.fileUpload.init();
    Mansour.fullScreen.init();
    Mansour.notification.init();
});