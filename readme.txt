
Techstack: HTML, JS, SCSS (extention: live sass compiler)
IDE: Visual Studio Code
Browser: Microsoft Edge

	1. add font tiếng nhật.

	2. Tái hiện thành công UI tìm kiếm.

	3. Thiết lập href="#" cho toàn bộ link.

	4. Code bằng SCSS và dùng extention: Live sass compiler.

	5. Responsive để không bị vỡ layout trên màn hình smartphone. 
	Trên bản smartphone đã làm menu chạy từ bên trái theo kiểu breadcrumb menu (hiển thị dưới thanh tìm kiếm). 
	Có chức năng đóng mở breadcrumb thực hiện bằng Javascript (sử dụng hàm siblings() trong jQuery).

	6. Hoàn toàn không sử dụng Bootstrap hay bất kỳ framework (HTML, CSS) nào để code.

	7. Cố gắng thực hiện coding mô phỏng design giống nhất có thể (perfect pixel).


Note: 
Một vài trong số các tên các class đặt theo layout cho trước (có một vài tên khác tự đặt theo cá nhân)

<Layout>
	<top_page> (có 2 grid__column)

        <BreadcrumbNavi> (hiển thị khi thu nhỏ màn hình)
        
        <grid__column-1>
            <LeftNavi>
                left__NaviBorder
                    logo__Container
                        left__NaviBtn
                    left__NaviList	   
            </LeftNavi>     				
        </grid__column-1>

        <grid__column-2>
            <RightContainer>  	
                    <right__AppContainer>
                        <Header>
                            header_Container 
                                bread
                                nav
                            search_Container
                                search_Box
                            brdcrmb (breadcrumb li)						
                        </Header>

                        <Main>        
                            #Section 1: Guild 
                                title_guild
                                content_guild
                                    btn_3col	

                            #Section 2: Output 
                                title_ouput
                                content_output_icon
                                    output__subTitle
                                    btn_4col      

                            #Section 3: Function 
                                title_function
                                content_function 
                                    subTitle
					function__Box
						function__subTitle
                                    		function__Text
					
                        </Main>
                    </right__AppContainer>
                </right__Container>
            </grid_column-2>
    <top_page>                                
<layout>
<footer>
    <box></box>
</footer>

Xin cảm ơn!
Trân trọng
Giang
