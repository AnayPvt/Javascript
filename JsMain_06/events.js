// EVENTS



// -----------------------------------------------------

document.getElementById('prayer').onclick = function(){
    alert('praying')
}

//  These are the multiple approaches to a single click event.

// USING EVENT LISTENERNERS IS THE BEST APPROACH AS IT HELPS US MANIPULATE MUCH MORE AND ALSO BE ABLE TO USE PROPOGRATIONS

const photoshop = document.getElementById('photoshop')

photoshop.addEventListener('click' , function(e) {
    alert('photoshopping') 
} , false)

/* 
Now whats up with the thrid paarameter i.e false well mostly we dont have to write it aause its default false only
But in interviews they may ask , the answer is 
*/

document.getElementById('owl').addEventListener('click' , function(e){
    console.log(e);
    
    
})

// now the console log gives us PointerEvent which mostly consists of environment information like the timestamp when tthe user clicked the paarticular image , the  height and width of desktop etc etc which can be mostly askedd in interviews

// like if u wanna know timestamp - e.timmestamp

// type , timestamp , defaultPrevented , target , toElement , srcElement , currentTarget etc


// ---------------------------------------------------------

document.getElementById('images').addEventListener('click' , function(e){
    console.log('clicked inside the ul');
})


document.getElementById('owl').addEventListener('click' , function(e){
    console.log(('owl clicked'));
    e.stopPropagation()
})

// BUBBLING GOES FROM INNER TO OUTER , I.E  FIRST ITS "OWL CLICKED" , THEN "CLICKED INSIDE UL" WILL BE PRINTED IN THE CONSOLE WHEN THE OWL IMAGE IS CLICKED

// THATS WHAT BUBBLING IS

// WHEREAS IN CAPTURING , IT GOES FROM OUTER TO INNER I.E FIRST "CLICKED INSIDE THE UL" WILL BE PRINTED THEN "OWL CLICKED"

// LASTLY WITH STOP PROPOGATION , THE OUTER PROGRAAM WONT BE PRINTED LEAVING ONLY THE EVENT WHICH IS CLICKED TO BE PRINTED

document.getElementById('google').addEventListener('click' , function(e){
    console.log('google clicked');
    e.preventDefault()
    e.stopPropagation()
} , false)

// prevent default 

// -------------------------------------------------

// SMALL PROJECT IDEA [I CLICK ON IMAGE AND IMAGE DISAPPEARS]

document.querySelector('#images').addEventListener('click' , function(e){
    // now we wanna target the parent node of each image which is obv "list item"

     // simply just use remove
    // removeIt.parentNode.removeChild(removeIt)
    // both works

    if(e.target.tagName === 'IMG'){
        let removeIt = e.target.parentNode
        removeIt.remove()
    }



    // even tho when we click on google or list item nd not the image , everything gets erased in one click , so to make sure that dont happpen will add some checks

    // here e.target.tagName gets you the tag of whatever you select , eg - if u select image it will be <img> , and for list item it will be <li>
} , false)