const blogTitle = document.getElementById('title');
const blogContent = document.getElementById('content');
const submitButton = document.getElementById('submit-btn');



// creating event lister for saving my blog in the local storage

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(blogTitle.value && blogContent.value){
        myBlog(blogTitle.value,blogContent.value);
        return;
    }
    alert('Please enter the required deatils correctly ');
    return;
})


function myBlog(key,value){
    localStorage.setItem(key.toString(),value.toString());  
}