/**
 * this is a mini profile web application which is all about Md Mamunur Rahman 
 * @Author Md Mamunur Rahman@Version 0.0.1 
 * @since 25-May-2016
 */

/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    
    // define arrays of HTML elements
    var paragraphHeading = [];
    var paragraphElements = [];
    
    //bonding ids with paragraphHeading arrays
    paragraphHeading [0]= document.getElementById("homeHeading");
    paragraphHeading [1]= document.getElementById("projectsHeading");
    paragraphHeading [2]= document.getElementById("biographyHeading");
    paragraphHeading [3]= document.getElementById("blogsHeading");
    paragraphHeading [4]= document.getElementById("photographyHeading");
    paragraphHeading [5]= document.getElementById("contactHeading");
    
    //bonding ids with paragraphElements arrays
    paragraphElements[0] = document.getElementById("homePara");
    paragraphElements[1] = document.getElementById("projectsPara");
    paragraphElements[2] = document.getElementById("biographyPara");
    paragraphElements[3] = document.getElementById("blogsPara");
    paragraphElements[4] = document.getElementById("photographyPara");
    paragraphElements[5] = document.getElementById("contactPara");
    
   // define your paragraphHeadingText array;
    var paragraphsHeadingText = [];
    
    // data for my Paragraph Heading
    paragraphsHeadingText[0] = "WELCOME TO MY WORLD";
    paragraphsHeadingText[1] = "MY PROJECTS";
    paragraphsHeadingText[2] = "BIOGRAPHY";
    paragraphsHeadingText[3] = "MY BLOGS";
    paragraphsHeadingText[4] = "MY PHOTOGRAPHY ON PIXOTO";
    paragraphsHeadingText[5] = "CONTACT";
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "Have a look on my Contact I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.I do what I BeLiEvE. I am trying demonstrate my own World.";
    paragraphs[1] = "Have a look on my projects.";
    paragraphs[2] = "My name is MD MAMUNUR RAHMAN";
    paragraphs[3] = "";
    paragraphs[4] = "";
    paragraphs[5] = "";
    
    // second way to define an array
    //var paragraphs = new Array();
   
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
         paragraphHeading[index].textContent= paragraphsHeadingText[index]
         
        }
    }
    
    
})();