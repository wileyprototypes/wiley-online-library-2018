$( '[data-fancybox="cover-gallery"]' ).fancybox({
    caption : function( instance, item ) {
        var caption = $(this).data('caption') || '',
            issue = $(this).attr('data-caption-issue') || '',
            title = $(this).attr('data-caption-title') || '',
            cdate = $(this).attr('data-caption-cdate') || '';
        
        caption = (caption.length ? caption + '<br />' : '') + (issue.length ? issue + '<br />' : '') + (title.length ? title + '<br />' : '') + (cdate.length ? cdate + '<br />' : '') + '<button class="mt-3 btn btn-outline-light btn-sm d-inline-flex align-items-center" type="button">Read issue<span class="mdi mdi-sm mdi-chevron-right"></span></button>' ;

        return caption;
    }
});