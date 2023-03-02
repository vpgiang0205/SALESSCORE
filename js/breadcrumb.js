var breadcrumb = document.getElementById("brdcrb");
var page = document.getElementById("dropdown");

// Use sibling() in jquery (Dùng hàm sibling() trong jquery):

/* create an "change" event for dropdown (tạo event khi click vào option được gán vào biến page theo id trong dropdown sẽ chạy các đoạn code dưới đây) */
page.addEventListener("change", function () {
    /* 1. when click in 1 page in the dropdown (khi người dùng click vào page trong menu dropdown)
    get the selected page from the dropdown (lấy value từ trang đã chọn gán vào biến currentPage) */
    var currentPage = this.value;
    
    /* create li element (tạo phần tử li) */ 
    var li = document.createElement("li");

    /* set attribute (set thuộc tính class và nội dung là currentPage vào li)*/
    li.setAttribute("class", "breadcrumb-item");
    li.innerText = currentPage + `  /  `;

    /* append to ul (hiển thị tag li vừa tạo vào làm con của ul theo id = brdcrb đã lấy ra từ trước)*/
    breadcrumb.appendChild(li);

    // -------------------------------------------------------------------------------------------------------------------------------------
    // 2. When pick another option in dropdown menu (Khi chọn phần tử khác trong menu dropdown):
    /* now get the previous element (lấy phần tử thẻ li đã chọn trước đó trong thẻ ul)*/
    var previousElmt = li.previousElementSibling;

    /* add Hyper link (thêm Hyper link vào) */
    previousElmt.innerHTML = "<a href='#'>" + previousElmt.innerText + "</a>"

    // -------------------------------------------------------------------------------------------------------------------------------------
    // when user click previous page (khi người dùng click trang trước trang hiện tại để trở về):
    var nxtsiblings = [];
    function sibling() {
        /* get nextsibling element (lấy phần tử sibling mới khi click vào gán vào biến nxtsiblingElmnt) */
        var nxtsiblingElmnt = this.nextElementSibling;

        /* store the sibling (thêm phần tử đó vào mảng nxtsiblings) */
        nxtsiblings.push(nxtsiblingElmnt);

        /* loop to check all the next siblings (chạy vòng lặp vô hạn kiểm tra tất cả siblings) */
        while (true) {
            /* if next sibling not available stop the loop (phần tử của sibling tiếp theo rỗng thì dừng vòng lặp)*/
            if (nxtsiblingElmnt.nextElementSibling == null) {
                break;
            }
            else {
            /** if available store it to nxblinings (ngược lại nếu nó thì lưu phần tử vào mảng nxtsiblings) */
                nxtsiblingElmnt = nxtsiblingElmnt.nextElementSibling;
                nxtsiblings.push(nxtsiblingElmnt);
            }
        }
        /* use for loop to remove siblings and siblings ,class
        (dùng vòng lặp để xóa các siblings mới nhất (trang hiện tại) rồi xóa thuộc tính class)*/
        for (var i = 0; i < nxtsiblings.length; i++) {
            nxtsiblings[i].removeAttribute("class");
            nxtsiblings[i].remove();
        }

        /* now add "active class" and replace hyperlink to text (rồi thêm active class vào phần tử mới nhất và thay hyperlink thành text)*/
        this.innerText = this.innerText;
        this.removeEventListener("click", sibling);
    }
    /* event when click previous page (event khi click vào các trang trước trên ul) */
    previousElmt.addEventListener("click", sibling);
});