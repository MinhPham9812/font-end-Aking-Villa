$(document).ready(function() {
    // Load header
    $("#header-container").load("header.html");
  
    // Load tabs và gắn sự kiện sau khi tải xong
    $("#tab-container").load("tabs.html", function() {
        console.log('Tabs loaded successfully');

        // Khởi tạo Swiper sau khi slider-news-container được load
        $("#slider-news-container").load("news.html", function() {
            const swiper = new Swiper('.swiper', {
                direction: 'horizontal',
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });

            // Xử lý chuyển sang trang news_detail.html sau khi nội dung `news.html` đã được load
            $('#slider-news-container').on('click', '.larg-news-item img', function(event) {
                event.preventDefault();

                 // Ẩn các phần tử khác và hiển thị news detail container
                $("#tab-content").hide(); // Ẩn các nội dung tab-content
                $("#news-detail-container").show(); // Hiển thị news detail

                // Load nội dung từ news_detail.html vào news-detail-container
                $("#news-detail-container").load("news_detail.html");
                
            });

            $('#slider-news-container').on('click', '.small-news-grid img', function(event) {
                event.preventDefault();

                 // Ẩn các phần tử khác và hiển thị news detail container
                $("#tab-content").hide(); // Ẩn các nội dung tab-content
                $("#news-detail-container").show(); // Hiển thị news detail

                // Load nội dung từ news_detail.html vào news-detail-container
                $("#news-detail-container").load("news_detail.html");
                
            });
        });

        // Gắn sự kiện click cho các tab
        $('#tabs a').on('click', function(event) {
            event.preventDefault(); // Ngăn hành vi mặc định (điều hướng trang)
            
            // Xóa class active khỏi tất cả các tab
            $('#tabs a').removeClass('active');
            // Thêm class active vào tab được click
            $(this).addClass('active');
            
            // Ẩn tất cả các tab
            $('.tab-pane').removeClass('active');
      
            // Kiểm tra và hiển thị nội dung cho từng tab
            let tabId = $(this).attr('id');
            console.log('Tab clicked: ' + tabId);
      
            if (tabId === 'news-link') {
                $('#news').addClass('active'); // Hiển thị tab 1
            } else if (tabId === 'newsProject-link') {
                if (!$('#newsProject').html()) {
                    $('#newsProject').load('newsProject.html');
                }
                $('#newsProject').addClass('active'); // Hiển thị tab 2
            } else if (tabId === 'notificationPage-link') {
                if (!$('#notificationPage').html()) {
                    $('#notificationPage').load('notificationPage.html');
                }
                $('#notificationPage').addClass('active'); // Hiển thị tab 3
            }
        });
    });

    // Load footer
    $("#footer-container").load("footer.html");
     

    // Xử lý scrollToTop
    // Kiểm tra nếu phần tử scrollToTop tồn tại
    if ($("#scrollToTop").length) {
        // Ẩn nút khi trang được tải
        $("#scrollToTop").hide();

        // Khi người dùng cuộn xuống 600px, hiển thị nút
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > 600) {
                $("#scrollToTop").fadeIn();
            } else {
                $("#scrollToTop").fadeOut();
            }
        });

        // Khi người dùng nhấp vào nút, cuộn về đầu trang
        $("#scrollToTop").on('click',function() {
            $("html, body").animate({scrollTop: 0}, 600);
            return false;
        });
    }
});

