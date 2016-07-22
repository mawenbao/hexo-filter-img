'use strict';

const imgReg = /<img src=(.*?)>/g;

hexo.extend.filter.register('after_post_render', function(data) {
    if (data.content.indexOf('<img') != -1) {
        data.content = data.content.replace(imgReg, '<div class="transform-img" data-src=$1></div>');
        return data;
    }
});
