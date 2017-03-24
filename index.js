var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
var date = yyyy + '-' + mm + '-' + dd + ' 09:59:00';

let sec = today.getSeconds();

$(function() {
    var token = "";
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

    $("#start").click(function() {
        token = $("#tokenbox").val();
        loging('開始搜尋今天 17:59 之後的文章..');
        contentSearch();
    });
    // sec = new Date().getSeconds;

    function contentSearch() {
        if (new Date().getSeconds >= sec) {
            FB.api(
                '/approprie/posts',
                'GET', {
                    "since": date,
                    "limit": "1",
                    "access_token": token
                },
                function(response) {
                    if (!response.data[0]) {
                        loging('尚未發文...');
                        // sec = sec + 5;
                        contentSearch();
                    } else {
                        let textid = response.data[0].id;
                        loging('已搜尋到文章！準備留言！');
                        contentComment(textid);
                    }
                }
            );
        } else {
            contentSearch();
        }

    }

    function contentComment(conid) {
        let apii = '/' + conid + '/comments';
        FB.api(
            apii,
            'POST', {
                "message": "+1",
                "access_token": token
            },
            function(response) {
                // Insert your code here
                if (response.id) {
                    loging('留言成功!');
                } else {
                    loging('再次嘗試...');
                }
            }
        );
    }

    function loging(msg) {
        let str = $("#loghere").text() + msg;
        $("#loghere").html(str);
    }
});