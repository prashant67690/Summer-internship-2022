const newTitle = document.getElementById('title');
const newContent = document.getElementById('content');
const selectContainer = document.getElementsByClassName('container')[0];   
var totalBlogs = [];

// creating the dynamically generated blogs using this 

function createBlog(title,content){
   
    blog.classList.add('box');
    
    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML="Delete <i class='fa fa-trash-can'></i>"
    blogTitle.innerText=title;
    blogContent.innerHTML=content;
    blog.appendChild(blogTitle);
    blog.appendChild(blogContent);
    selectContainer.appendChild(blog);
}

// function for deleting the post

    

function removeBlogs(){
    console.log(tobeDeleted);
    Object.keys(localStorage).forEach((key)=>{
        if(key === tobeDeleted)
        localStorage.removeItem(tobeDeleted);
    })
}

// function to load all the blogs at the srtart of the page
window.onload = () => {
	getBlogs()
}

// creating render function which loads the entire documnets present in the
function render(){
    console.log("render is called");
    totalBlogs.forEach((value,index)=>{
        let blog = document.createElement('div');
        let blogTitle = document.createElement('h3');
        let blogContent = document.createElement('p');
           
    })
} 

const getBlogs = () => {
	Object.keys(localStorage).forEach((key, index) => {
		createBlog(key, localStorage.getItem(key))
	})
}