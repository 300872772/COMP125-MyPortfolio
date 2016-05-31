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
    paragraphsHeadingText[2] = "<b class='navbar-brand'><i>BIOGRAPHY</i><b>";
    paragraphsHeadingText[3] = "MY BLOGS";
    paragraphsHeadingText[4] = "MY PHOTOGRAPHY ON PIXOTO";
    paragraphsHeadingText[5] = "CONTACT";
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "I want to have a bule sky with white clouds... where i can draw my sweet dreams...lol. Actually... i like to have a dream but which is not just like a painting... i like to have an aim but not for bull's eye...i like to climb a mountain but dont want to touch the sky....i like to have my own sky but i dont need to have wings...if you can give me one island --- i can give you one moonlit night.. but i am sorry that i do have only one moon in my Earth.... it would be better if we would have at least two moons like Mars. Lets go to Mars..lolll.. Just kidding...";
    paragraphs[2] = "<div class='row'><div class='photobook'><div class='col-md-3'><img src='../Assets/mamun.jpg' class='mamunImage'></div><div class='col-md-3'><span class='photobook'><small>Name:</small><br><b>MD MAMUNUR RAHMAN</b><br><small>Current Occupation:</small><br><b>Student of Software Engineering and Technology, Centennial College</b></span></div><div class='col-md-3'><span class='photobook'><small>Name:</small><br><b>MD MAMUNUR RAHMAN</b><br><small>Current Occupation:</small><br><b>Student of Software Engineering and Technology, Centennial College</b></span></div><div class='col-md-3'><span class='photobook'><small>Name:</small><br><b>MD MAMUNUR RAHMAN</b><br><small>Current Occupation:</small><br><b>Student of Software Engineering and Technology, Centennial College</b></span></div></div></div> <div class='row'><br><ul><li>As an Accountant have experience over 12 years in diversified businesses.</li><li>Astute Visual Basic programmer and macro tools maker in MS Excel with depth knowledge and experience in Business Intelligence (BI) formatting and data analysis.Also have 7 years working experience under SAP ERP platform.</li><li>Have experience of working in Shipping Lines, Airlines, Freight Forwarding and Supply Chain, Contract Logistics and FMCG sales & Distribution businesses under MGH Group. MGH Group is one of country’s leading conglomerates having its entity/investments in International Transportation, Aviation Services, Consumer Products Distribution, Media Distribution, Food & Beverage and Commercial Banking in Bangladesh.</li><li>Have experience of working in Agro-Industrial and Food Business under C.P. Bangladesh Co. Ltd.</li><li>Have experience working in multicultural environment in different countries.</li></lu></div>";
    paragraphs[3] = "";
    paragraphs[4] = "";
    paragraphs[5] = "";
    
    // second way to define an array
    //var paragraphs = new Array();
   
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].innerHTML = paragraphs[index];
         paragraphHeading[index].innerHTML= paragraphsHeadingText[index]
         
        }
    }
    
    
})();