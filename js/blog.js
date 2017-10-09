/**
 * Created by tiki on 2017/6/21.
 */
var url_prefix = "http://localhost:8990/pipes/";

function loadBlogList(categoryid) {
    var blogListUrl = url_prefix + "blog/blogArticalList"
    $.get(blogListUrl, function (res) {
        $.each(res, function (index, val) {
            var articalId = res[index].articalId;
            var title = res[index].title;
            var content = res[index].content;
            var html = "<div class='blog-info'>"
                + " <h2>" + title + "</h2>"
                + " <h5>��ǩ��</h5>"
                + "<span>ʱ��</span><span>����</span><span>����</span>"
                + "<p>" + content
                + "</p>"
                + "<button class='btn btn-blog-info'><a href='javascript:void(0);' onclick='getArticalDetail(" + articalId + ");'>�˽����</></button>"
                + "<div class='clearfix'></div>"
                + "<hr/>"
                + "</div>";

            $(".blog-list").append(html);
        });
        if (res.length > 0) {
            var pagerHtml = "<ul class='pager'>"
                + "<li class='previous'><a href='#'>&larr; Older</a></li>"
                + "<li class='next'><a href='#'>Newer &rarr;</a></li>"
                + "</ul>"
                + "<hr/>";
            $(".blog-list").append(pagerHtml);
        }
    })
}

function getArticalDetail(articalId) {
    var detailHtml = "blogDetail.html?articalId=" + articalId;
    window.location.href = detailHtml;
}

function loadBlogCategoryList(){
    var blogListUrl = url_prefix + "blog/blogCategoryList";
    $.get(blogListUrl, function (res) {
        $.each(res, function (index, val) {
            var categoryId = res[index].categoryId;
            var title = res[index].name;
            var html = "<div class='dropdown'> <button type='button' class='btn dropdown-toggle' id='dropdownMenu"+(index +1)+"' data-toggle='dropdown'>" + title
            +"<span class='caret'></span>"
            +" </button>"
            +"  <ul class='dropdown-menu' role='menu' aria-labelledby='dropdownMenu"+(index +1)+"'>"
            +"  <li role='presentation'>"
            +"  <a role='menuitem' tabindex='-1' href='#'>" + title+ "</a>"
            +"  </li></ul></div>";

            $(".blog-category").append(html);
        });
        $(".blog-category").append("<hr/>");
    });
}


