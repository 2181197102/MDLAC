// 在这里你可以使用 jQuery 或者纯 JavaScript 来处理表单提交和动态内容的显示
$(document).ready(function() {
    $('#myForm').on('submit', function(event) {
        event.preventDefault(); // 阻止表单默认提交行为

        var formData = $(this).serialize(); // 序列化表单数据为字符串

        // 发送 Ajax 请求
        $.ajax({
            url: $(this).attr('action'), // 表单的 action 属性值
            type: 'POST',
            data: formData,
            success: function(response) {
                $('#dynamicContent').html(response); // 更新动态内容区域
                $('#elm1').val(''); // 清空文本框
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
            }
        });
    });
});
