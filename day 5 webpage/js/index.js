const newTitle = document.getElementById('title');
const newContent = document.getElementById('content');
const selectContainer = document.getElementsByClassName('container')[0];   

// creating the dynamically generated blogs using this 

function createBlog(title,content){
    let blog = document.createElement('div');
    blog.classList.add('box');
    let blogTitle = document.createElement('h3');
    let blogContent = document.createElement('p');
    let deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerText='Delete Post'
    deleteButton.innerHTML=`Delete Post <i class="fa-solid fa-trash-can"></i> <span id=${title} class="hide">`;
    blogTitle.innerText=title;
    blogContent.innerHTML=content;
    blogTitle.appendChild(deleteButton);
    blog.appendChild(blogTitle);
    blog.appendChild(blogContent);
    selectContainer.appendChild(blog);
}

// function for deleting the post
const removeBlogs = (toBeDeletedKey)=>{
    Object.keys(localStorage).forEach((key)=>{
        if(key ===toBeDeletedKey){
            localStorage.removeItem(key);
        }
        else{
            alert('cant be printed');
        }
    })
}

// function to load all the blogs at the srtart of the page
window.onload = () => {
	getBlogs()
}

const getBlogs = () => {
	Object.keys(localStorage).forEach((key, index) => {
		createBlog(key, localStorage.getItem(key))
	})
}