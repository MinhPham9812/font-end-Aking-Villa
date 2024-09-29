$(document).ready(function() {
    // Load header
    $("#header-container").load("header.html");
  
    // Load footer
    $("#footer-container").load("footer.html");
  
    // Load slider content for news, sau đó khởi tạo Swiper
    $("#slider-news-container").load("news.html", function() {
        // Khi slider đã tải xong, khởi tạo Swiper
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    });

     // Khi trang được tải, mặc định Tab 1 (news) được hiển thị
     $('#news').load('news.html');

    // Khi người dùng nhấp vào Tab 1 (Tin Aking Village)
    $('#news-link').on('click', function(event) {
        event.preventDefault(); // Ngăn không cho link mặc định thực hiện điều hướng (vì href="#")
        console.log('Tab 1 clicked');
        $('.tab-pane').hide();  // Ẩn tất cả các tab
        $('#tab-content').empty(); // Xóa nội dung hiện tại
        $('#news').show(); // Hiển thị tab 1
        $('#news').load('news.html'); // Tải nội dung từ file news.html
    });

    // Khi người dùng nhấp vào Tab 2 (Tin Dự Án)
    $('#tinDuAn-link').on('click', function(event) {
        event.preventDefault();
        $('.tab-pane').hide();  // Ẩn tất cả các tab
        $('#tab-content').empty(); // Xóa nội dung hiện tại
        $('#tinDuAn').show(); // Hiển thị tab 2
        $('#tinDuAn').load('tinDuAn.html'); // Tải nội dung từ file tinDuAn.html
    });

    // Khi người dùng nhấp vào Tab 3 (Thông Báo)
    $('#thongBao-link').on('click', function(event) {
        event.preventDefault();
        $('.tab-pane').hide();  // Ẩn tất cả các tab
        $('#tab-content').empty(); // Xóa nội dung hiện tại
        $('#thongBao').show(); // Hiển thị tab 3
        $('#thongBao').load('thongBao.html'); // Tải nội dung từ file thongBao.html
    });
});

