const checkBoxes = [];
const checkBoxesItems = [];
let timer;
let turn = 0;
window.onload = function() {
    checkBoxes[0] = document.getElementById('r1');
    checkBoxes[1] = document.getElementById('r2');
    checkBoxesItems[0] = document.getElementById('l1');
    checkBoxesItems[1] = document.getElementById('l2');
    check(0);

    autoSlideShow = function() {
        turn++;
        if(turn >= checkBoxes.length)
        {
            turn = 0;
        }
        checkBoxes[turn].checked = true;
        check(turn);
    }

    timer = setInterval(autoSlideShow, 15000);

    for(let i = 0; i < checkBoxes.length; i++)
    {
        checkBoxes[i].onclick = function(){

            turn = i;
            check(i);
            clearInterval(timer);
            timer = setInterval(autoSlideShow, 15000);
    
        };
    }
};

function check(num)
{
    checkBoxesItems[num].style.opacity = '.8';

    for(let i = 0; i < checkBoxes.length; i++)
    {
        if(i != num)
        {
            checkBoxesItems[i].style.opacity = '.5';
        }
    }
}