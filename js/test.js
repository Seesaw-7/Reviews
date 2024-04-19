window.onload = function () {
    imgLocation('items', 'box');
    window.addEventListener('resize', function () {
        imgLocation('items', 'box');
    });
};

// function imgLocation(parent, content) {
//     var cparent = document.getElementById(parent);
//     var allBoxes = document.getElementsByClassName('box');
//     if (allBoxes.length === 0) return;

//     var firstBox = allBoxes[0];
//     var style = window.getComputedStyle(firstBox);
//     var marginLeft = parseInt(style.marginLeft, 10);
//     var marginRight = parseInt(style.marginRight, 10);
//     var imgWidth = allBoxes[0].offsetWidth + marginLeft + marginRight;

//     var num = Math.floor(document.documentElement.clientWidth / imgWidth);
//     cparent.style.cssText = `width: ${imgWidth * num}px` // set the container width

//     var BoxHeightArr = new Array(num).fill(0);
//     for (var i = 0; i < allBoxes.length; i++) {
//         if (i < num) {
//             BoxHeightArr[i] = allBoxes[i].offsetHeight
//         } else {
//             var minHeight = Math.min.apply(null, BoxHeightArr)
//             var minIndex = getMinHeightLocation(BoxHeightArr, minHeight)
//             allBoxes[i].style.position = 'absolute'
//             allBoxes[i].style.top = minHeight + 'px'
//             allBoxes[i].style.left = allBoxes[minIndex].offsetLeft + 'px'
//             BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + allBoxes[i].offsetHeight
//         }
//     }
// }

function imgLocation(parent, content) {
    var cparent = document.getElementById(parent);
    var allBoxes = document.getElementsByClassName(content);
    if (allBoxes.length === 0) return;

    var firstBox = allBoxes[0];
    var style = window.getComputedStyle(firstBox);
    var marginLeft = parseInt(style.marginLeft, 10);
    var marginRight = parseInt(style.marginRight, 10);
    var imgWidth = firstBox.offsetWidth + marginLeft + marginRight; // Now includes margins

    var num = Math.floor(document.documentElement.clientWidth / imgWidth);
    console.log(num)
    cparent.style.width = `${imgWidth * num}px`;

    var BoxHeightArr = new Array(num).fill(0);
    console.log(BoxHeightArr.length)

    for (var i = 0; i < allBoxes.length; i++) {
        console.log("i: "+i);
        var minHeight = Math.min(...BoxHeightArr);
        console.log("minHeight: "+minHeight)
        var minIndex = BoxHeightArr.indexOf(minHeight);
        console.log("minIndex: "+minIndex)

        allBoxes[i].style.position = 'absolute';
        allBoxes[i].style.top = minHeight + 'px';
        allBoxes[i].style.left = allBoxes[minIndex].offsetLeft + 'px';
        console.log(allBoxes[i].style.left);
        BoxHeightArr[minIndex] += allBoxes[i].offsetHeight;
    }
}


function getMinHeightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] === minHeight) {
            return i
        }
    }
}
