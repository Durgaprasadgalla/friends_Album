@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&display=swap');
*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}
.navbar{
    background-color:transparent;
}
.navbar-toggler {
    border-color:white;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28255, 255, 255, 1%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
#nav-item1{
    color:rgb(9, 233, 207);
    font-weight: 400;
    font-size:20px;
}
#nav-item2{
    color: rgb(9, 233, 207);
    font-weight: 400;
    font-size:20px;
}
#nav-item3{
    color:rgb(9, 233, 207);
    font-weight: 400;
    font-size:20px;
}
#nav-item4{
    color:rgb(9, 233, 207);
    font-weight: 400;
    font-size:20px;
}
.bg-container{
    padding: 10px;
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    row-gap:5%;
}
.container-img{
    width: 100%;
    border-radius: 50%;
}
.btns{
    /* background-color: aliceblue; */
    display: flex;
    /* flex-direction: column; */
    gap :40px;
}
/* Floating Hearts for Friendship Animation */
.heart {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    transform: rotate(-45deg);
    animation: float 6s infinite ease-in-out;
}

.heart::before, .heart::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
}

.heart::before {
    top: -10px;
    left: 0;
}

.heart::after {
    top: 0;
    left: 10px;
}

@keyframes float {
    0% {
        transform: translateY(0) rotate(-45deg);
        opacity: 1;
    }
    100% {
        transform: translateY(-600px) rotate(-45deg);
        opacity: 0;
    }
}

/* Multiple hearts with different timing and positions */
.heart:nth-child(1) {
    left: 10%;
    animation-duration: 4s;
}

.heart:nth-child(2) {
    left: 30%;
    animation-duration: 6s;
}

.heart:nth-child(3) {
    left: 50%;
    animation-duration: 5s;
}

.heart:nth-child(4) {
    left: 70%;
    animation-duration: 7s;
}

.heart:nth-child(5) {
    left: 90%;
    animation-duration: 6s;
}
.boys{
    background-color:black;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.girls{
    background-color:black;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.heading{
    color: rgb(9, 233, 207);
    
    font-family:'Courier New', Courier, monospace;
    /* font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */
}
.information{
    font-family:'Courier New', Courier, monospace;
    color:rgb(9, 233, 207);
}
.member-details{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    /* width: 80%; */
}
.boys-heading{
    color:rgb(9, 233, 207);
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    
}
span{
    color:white;
    font-weight: 900;
    font-size: 25px;
}
.card-conatiner{
    margin-bottom: 10%;
    padding: 5px;
    background-color: white;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    box-shadow: 0 1px 20px black;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-conatiner:hover{
    transform: translateY(-10px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
    background-color: rgb(233, 149, 149);
}
.card-img{
    border: 2px solid black;
    width: 100%;
    height: 100%;
}
.upload-container{
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color:black;
    color: white;
}
.upload{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.uploaded{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


h1 {
    color: rgb(9, 233, 207);
    
}
.upload-section {
    margin: 20px 0;
    color: rgb(9, 233, 207); 
}
.upload-section input[type="file"] {
    padding: 10px;
    font-size: 16px;
    color: rgb(9, 233, 207);
    
}
#gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
}
.gallery-item {
    margin: 10px;
    /* border: 1px solid #ddd; */
    padding: 5px;
    background-color: rgb(9, 233, 207);
    /* border-radius: 5px; */
    position: relative;
    width: 200px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.gallery-item img {
    width: 100%;
}
.delete-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
    text-align: center;
    line-height: 25px;
}
.songbtn{
    width: 120px;
    height: 40px;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 12px;
    background-color: rgb(56, 137, 243);
    color:black;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-family:'Courier New', Courier, monospace;
    padding: 5px;

}
.songbtn:hover{
    background-color: blanchedalmond;
}
/*mobile */
@media (max-width: 600px) {
    .heading{
        font-size: 20px;
        font-family:'Courier New', Courier, monospace;
    }
    .information{
        font-size: 12px;
        font-family:'Courier New', Courier, monospace;
    }
 

}
/*Tab */
@media(min-width:601px)and (max-width:900px){
    .heading{
        font-size: 35px;
        font-family:'Courier New', Courier, monospace;
    }
    .information{
        font-size: 20px;
        font-family:'Courier New', Courier, monospace;
    }
    .container-img{
        width: 80%;
        height: 400px;
        border-radius: 50%;
    }
}
/*Desktop */
@media(min-width:901px){
    .card-conatiner{
        width:100%;
        /* margin: 20%; */
        background-color: white;
        display: flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        border: 2px solid black;
        box-shadow: 0 1px 20px black;
        cursor: pointer;
        font-family: 'Roboto', sans-serif;
    }
    .container-img{
        width: 50%;
        height:50%;
    }
}
