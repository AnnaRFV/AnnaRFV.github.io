

   // add the animation to the modal
$( ".modal" ).each(function(index) {
   $(this).on('show.bs.modal', function (e) {
    var open = $(this).attr('data-easein');
     if(open == 'shake') {
                 $('.modal-dialog').velocity('callout.' + open);
            } else {
              $('.modal-dialog').velocity('transition.' + open);
            }
    }); 
});