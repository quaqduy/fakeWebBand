window.onload = function() {
    // -----------------js of navbar-------------------
    var navbar = document.querySelector('#navbar');
    var check = document.querySelector('#check');

    check.onclick = function(e) {
            if (e.target.checked === true) {
                Object.assign(navbar.style, { overflow: 'visible' });
            } else if (e.target.checked === false) {
                Object.assign(navbar.style, { overflow: 'hidden' });
            }
        }
        // -----------------js of slider-------------------
    var img1 = document.querySelector('#img1');
    var img2 = document.querySelector('#img2');
    var img3 = document.querySelector('#img3');
    var inf1 = document.querySelector('#inf1');
    var inf2 = document.querySelector('#inf2');
    var inf3 = document.querySelector('#inf3');

    var arrImg = [img1, img2, img3];
    var arrInf = [inf1, inf2, inf3];

    function setZIndexDefault() {
        for (var i = 0; i < arrImg.length; i++) {
            Object.assign(arrImg[i].style, {
                zIndex: '2'
            });
        }
        for (var j = 0; j < arrInf.length; j++) {
            Object.assign(arrInf[j].style, {
                zIndex: '0'
            });
        }
    }

    function autoSlider() {
        var i = 0;
        setInterval(function() {
            setZIndexDefault();
            Object.assign(arrImg[i].style, {
                zIndex: '3'
            });
            Object.assign(arrInf[i].style, {
                zIndex: '5'
            });
            i++;
            if (i == 3) {
                i = 0;

            }
        }, 3000);

    }
    autoSlider(arrImg);

}