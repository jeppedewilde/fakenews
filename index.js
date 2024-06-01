let likeCount = 0;
let dislikeCount = 0;

function likeArticle() {
    likeCount++;
    document.getElementById('likeCount').innerText = likeCount;
}

function dislikeArticle() {
    dislikeCount++;
    document.getElementById('dislikeCount').innerText = dislikeCount;
}

function shareArticle() {
    alert('Dit artikel is gedeeld op social media!');
}

function addComment(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;
    const commentList = document.getElementById('commentList');

    const newComment = document.createElement('li');
    newComment.textContent = commentText;

    commentList.appendChild(newComment);
    commentInput.value = '';
}