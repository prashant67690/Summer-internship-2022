const blogTitle = document.getElementById('title');
const blogContent = document.getElementById('content');
const submitButton = document.getElementById('submit-btn');



// creating event lister for saving my blog in the local storage

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(blogTitle.value && blogContent.value){
        myBlog(blogTitle.value,blogContent.value);
        window.location.href = "http://127.0.0.1:5500/week%201/day%205%20webpage/index.html";
    }else
    alert('Please enter the required deatils correctly ');
    
})


function myBlog(key,value){
    localStorage.setItem(key.toString(),value.toString());  
}