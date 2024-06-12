function ShowSideBar() {
    const sidebar = document.querySelector('.sidebar-container');
    const arrowRight = document.querySelector('.fa-arrow-right');
    const arrowLeft = document.querySelector('.fa-arrow-left');
    const content = document.querySelector('.sidebar-content-list');
    const indicator = document.querySelector('.sidebar-content-indicate');
    
    sidebar.style.transform = 'translateX(0%)';
    arrowRight.classList.add('hide');
    arrowLeft.classList.add('show');
    indicator.classList.add('hide');
    content.classList.remove('hide');
    content.classList.add('show');
}

function HideSideBar() {
    const sidebar = document.querySelector('.sidebar-container');
    const arrowRight = document.querySelector('.fa-arrow-right');
    const arrowLeft = document.querySelector('.fa-arrow-left');
    const content = document.querySelector('.sidebar-content-list');
    const indicator = document.querySelector('.sidebar-content-indicate');
    
    if (window.innerWidth < 600) {
        sidebar.style.transform = 'translateX(-85%)';
    } else {
        sidebar.style.transform = 'translateX(-75%)';
    }
    arrowRight.classList.remove('hide');
    arrowLeft.classList.remove('show');
    indicator.classList.remove('hide');
    content.classList.remove('show');
    content.classList.add('hide');
}

var isCollapsed= true;

function ShowThread(){
    const subthread =  document.querySelector('.sub-thread-container');
    const arrowdown = document.querySelector('.fa-angle-down');
    subthread.classList.remove('hide');
    arrowdown.style.transform = 'rotate(180deg)';
    isCollapsed= false;
}

function HideThread(){
    const subthread =  document.querySelector('.sub-thread-container');
    const arrowdown = document.querySelector('.fa-angle-down');
    subthread.classList.add('hide');
    arrowdown.style.transform = 'rotate(0deg)';
    isCollapsed= true;
}

function toggleContent(){
    if (isCollapsed) {
        ShowThread();
    } else {
        HideThread();
    }
}

var icons= document.querySelectorAll('.toggle-icon');

icons.forEach(function(icon){
    icon.addEventListener('click', toggleContent);
});

var IsCollap1=true;
var IsCollap2=true;

function ShowToggle(){
    const ThreadA= document.querySelector('.Introduction');
    const tIcon1 = document.querySelector('.toggle-icon-1');
    ThreadA.classList.remove('hide');
    tIcon1.style.transform = 'rotate(180deg)';
    IsCollap1= false;
}

function HideToggle(){
    const ThreadA= document.querySelector('.Introduction');
    const tIcon1 = document.querySelector('.toggle-icon-1');
    ThreadA.classList.add('hide');
    tIcon1.style.transform = 'rotate(0deg)';
    IsCollap1= true;
}

function ToggleContent(){
    if (IsCollap1) {
        ShowToggle();
    } else {
        HideToggle();
    }
}

var Icon1= document.querySelectorAll('.toggle-icon-1');

Icon1.forEach(function(icon1){
    icon1.addEventListener('click', ToggleContent);
});

function showtoggle(){
    const ThreadA= document.querySelector('.thread-a');
    const tIcon2 = document.querySelector('.toggle-icon-2');
    ThreadA.classList.remove('hide');
    tIcon2.style.transform = 'rotate(180deg)';
    IsCollap2= false;
}

function hidetoggle(){
    const ThreadA= document.querySelector('.thread-a');
    const tIcon2 = document.querySelector('.toggle-icon-2');
    ThreadA.classList.add('hide');
    tIcon2.style.transform = 'rotate(0deg)';
    IsCollap2= true;
}

function togglecontent(){
    if (IsCollap2) {
        showtoggle();
    } else {
        hidetoggle();
    }
}

var Icon2= document.querySelectorAll('.toggle-icon-2');

Icon2.forEach(function(icon2){
    icon2.addEventListener('click', togglecontent);
});

var IsVis1=true;
var IsVis2=true;

function ShowText(){
    const ThreadA= document.querySelector('.text-inv-1');
    const tIcon1 = document.querySelector('.sm-btn-1');
    ThreadA.classList.remove('hide');
    tIcon1.innerText = 'See Less';
    IsVis1= false;
}

function HideText(){
    const ThreadA= document.querySelector('.text-inv-1');
    const tIcon1 = document.querySelector('.sm-btn-1');
    ThreadA.classList.add('hide');
    tIcon1.innerText = 'See More';
    IsVis1= true;
}

function ShowMore(){
    if (IsVis1) {
        ShowText();
    } else {
        HideText();
    }
}

var SM1= document.querySelectorAll('.sm-btn-1');

SM1.forEach(function(sm1){
    sm1.addEventListener('click', ShowMore);
});

function showtext(){
    const ThreadA= document.querySelector('.text-inv-2');
    const tIcon1 = document.querySelector('.sm-btn-2');
    ThreadA.classList.remove('hide');
    tIcon1.innerText = 'See Less';
    IsVis2= false;
}

function hidetext(){
    const ThreadA= document.querySelector('.text-inv-2');
    const tIcon1 = document.querySelector('.sm-btn-2');
    ThreadA.classList.add('hide');
    tIcon1.innerText = 'See More';
    IsVis2= true;
}

function showmore(){
    if (IsVis2) {
        showtext();
    } else {
        hidetext();
    }
}

var SM2= document.querySelectorAll('.sm-btn-2');

SM2.forEach(function(sm2){
    sm2.addEventListener('click', showmore);
});

document.addEventListener('DOMContentLoaded', function () {
    const rightSidebar = document.querySelector('.dashboard-right-side');
    const ind= document.querySelector('.close-nb')

    function toggleRightSidebar() {
        if (rightSidebar.style.right === '0%') {
            rightSidebar.style.right = '-30%';
        } else {
            rightSidebar.style.right = '0%';
        }
    }


    ind.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleRightSidebar();
    });

    document.addEventListener('click', function(event) {
        if (rightSidebar.style.right === '0%' && !rightSidebar.contains(event.target)) {
            rightSidebar.style.right = '-30%';
        }
    });
});
