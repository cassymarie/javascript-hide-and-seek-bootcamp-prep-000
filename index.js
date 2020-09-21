
function getFirstSelector(selector){
    return document.querySelector(selector)
}

function nestedTarget(){
    let ele = document.querySelector('#nested .target');
    return ele
}

function increaseRankBy(n){
    let list = document.getElementById('app').getElementsByClassName('ranked-list');
    for (let ls = 0; ls < list.length; ls++){
        listElements = list[ls].getElementsByTagName('li')
        for (let i = 0; i < listElements.length; i++){
            let val = (parseInt(listElements[i].textContent)+n)
            listElements[i].textContent = val;
        }
    }
}

function deepestChild(){
    let findDeep = document.getElementById('grand-node').getElementsByTagName('div')
    return findDeep[(findDeep.length - 1)]
}