var breadcrumb = document.getElementById("brdcrb");
var page = document.getElementById("dropdown");

// Dùng hàm sibling() trong jquery:
/**tóm tắt
 * chúng ta sẽ có 3 trường hợp
 * mỗi trường hợp sẽ thay đổi trên ul
 * TH1: khi click vào chọn option thì lấy value của nó rồi gán vào 1 biến
 * ta tạo thẻ li set thuộc tính vào làm con của thẻ ul theo id brdcrb
 * => lúc này đã hiển thị trên màn hình
 * 
 * TH2: khi người dùng bấm chọn trang khác trên nav
 * b1. ta lấy phần tử trc đó gán vào 1 biến bằng previousElementSibling
 * b2. thêm hyperlink vào để click được
 * b3. sau đó quay lại TH1
 *  
 * TH3: khi người dùng bấm vào trang để trở về trên breadcrumb
 * b1. lấy phần tử vừa click vào mảng
 */
/* tạo event khi click vào option được gán vào biến page theo id 
trong dropdown sẽ chạy các đoạn code dưới đây */

page.addEventListener("change", function () {
    /* 1: Khi người dùng click vào page trong menu dropdown: */

    /** lấy value từ phần tử option đã chọn gán vào biến currentPage */
    var currentPage = this.value;

    /** tạo phần tử li */
    var li = document.createElement("li");

    /** set thuộc tính class và nội dung là currentPage vào li */
    li.setAttribute("class", "breadcrumb-item");
    li.innerText = currentPage + `  /  `;

    /**thêm phần tử li vừa tạo vào làm con của ul theo id = brdcrb đã lấy ra từ trước */
    breadcrumb.appendChild(li);

    /* 2. Khi chọn phần tử khác trong menu dropdown: */
    /**  trả về phần tử trước đó vào biến previousElmt*/
    var previousElmt = li.previousElementSibling;

    /**add Hyper link (thêm Hyper link vào) phần tử đó để khi cick vào sẽ trở về trang trước  */
    previousElmt.innerHTML = "<a href='#'>" + previousElmt.innerText + "</a>"

    // 3. Khi người dùng click trang trước trang hiện tại để trở về:
    /* event khi click vào link của trang trước trên ul của breadcrumb */
    previousElmt.addEventListener("click", sibling);
    var nxtsiblings = [];
    function sibling() {
        /* lấy phần tử mới khi click vào gán vào biến nxtsiblingElmnt) */
        var nxtsiblingElmnt = this.nextElementSibling;
        /* thêm phần tử đó vào mảng nxtsiblings */
        nxtsiblings.push(nxtsiblingElmnt);

        /* chạy vòng lặp vô hạn kiểm tra tất cả siblings */
        while (true) {
            /* phần tử tiếp theo rỗng thì dừng vòng lặp */
            if (nxtsiblingElmnt.nextElementSibling == null) {
                break;
            }
            else {
                /** nếu có thì lưu phần tử vào mảng nxtsiblings */
                nxtsiblingElmnt = nxtsiblingElmnt.nextElementSibling;
                nxtsiblings.push(nxtsiblingElmnt);
            }
        }
        /* xóa các phần tử, thuộc tính trong mảng để thay thế nó bằng phần tử mới nhất  */
        for (var i = 0; i < nxtsiblings.length; i++) {
            nxtsiblings[i].removeAttribute("class");
            nxtsiblings[i].remove();
        }

        /* rồi thêm active class vào phần tử mới nhất và thay hyperlink thành text */
        this.innerText = this.innerText;
        this.removeEventListener("click", sibling);
    }

});