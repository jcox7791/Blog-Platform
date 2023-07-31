"use strict";
// Set up of querySelector
const $ = (selector) => document.querySelector(selector);

function load() {
    // Setting the current date in the HTML modal-body form date input.
    document.getElementById('blog_date').valueAsDate = new Date();
    // submit-btn event_listener.
    document.getElementById('create_post').addEventListener("click", (e) => {
        e.preventDefault();
        // console.log("I'm the the submit-btn"); 
        createBlogPost();
        document.querySelector("#modal_close").click();

    });
    // objId(); // id placeholder function
}
// ID padding placehlder function
// let padding = 2;
// function objId() {
//     if (postId.length > 99) {
//         padding = 3;
//     }
//     if (postId.length > 999) {
//         padding = 4;
//     }
//     if (postId.length > 9999) {
//         padding = 5;
//     }
//     if (postId.length > 99999) {
//         padding = 6;
//     }
// };

// Creating the blog.
const createBlogPost = () => {
    // Variables set to users values 
    let title_blog = ($("#blog_title").value);
    let date_blog = ($("#blog_date").value);
    let images_blog = ($("#blog_img").value);
    let video_blog = ($("#blog_video").value);
    let audio_blog = ($("#blog_audio").value);
    let text_blog = ($("#blog_txt").value);
    // Blog storage obj. 
    let post = {
        "title": "",
        "date": "",
        "images": [],
        "video": [],
        "audio": [],
        "text": ""
    };
    if (title_blog == "") {
        post["title"] = "Need a Title!";
    } else { post["title"] = title_blog; }

    if (date_blog == "") {
        post["date"] = "Need a Date!";
    } else { post["date"] = date_blog; }

    if (images_blog == "") {
        post["images"] = "Image's Not Necessary!";
    } else { post["images"] = images_blog; }

    if (video_blog == "") {
        post["video"] = "Video Not Necessary!";
    } else { post["video"] = video_blog; }

    if (audio_blog == "") {
        post["audio"] = "Audio Not Necessary!";
    } else { post["audio"] = audio_blog; }

    if (text_blog == "") {
        post["text"] = "Text Not Necessary!";
    } else { post["text"] = text_blog; } 
      for (let i in post.length) {

        console.log("I am ", [i])
    }
    console.log(post);
    // Pushing the users blog to the server.  
    postToServer(post);
}
// Posting the client data to the server.
function postToServer(data) {
    fetch("/api/blogPost", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
    })
}
window.onload = load();