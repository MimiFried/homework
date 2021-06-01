(()=> {
    'use strict';
const addComment = $('#addComment');
addComment.hide();
    $('.commentBtn').click((e)=>{
        $(e.target).after(addComment.show());
    });
    const commentBody = $('#commentBody');
    $('#addBtn').click( async (e)=>{
        addComment.hide();
        const post = $(e.target).closest('.post').attr('id')
        const response = await fetch(`/addComment/${post}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({body: commentBody.val()})
        });
    }); 

})();