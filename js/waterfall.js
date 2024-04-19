window.onload = function () {
    imgLocation('items', 'box');
    window.addEventListener('resize', function () {
        imgLocation('items', 'box');
    });
};

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
    console.log("num: " + num)
    cparent.style.width = `${imgWidth * num}px`;

    var BoxHeightArr = new Array(num).fill(0);

    for (var i = 0; i < allBoxes.length; i++) {
        if (i < num) {
            console.log("i: " + i);
            allBoxes[i].style.position = 'absolute';
            allBoxes[i].style.top = '0px';
            allBoxes[i].style.left = (i * imgWidth) + 'px';
            BoxHeightArr[i] = allBoxes[i].offsetHeight;
        } else {
            console.log("i: " + i);
            var minHeight = Math.min(...BoxHeightArr);
            console.log("minHeight: " + minHeight)
            var minIndex = BoxHeightArr.indexOf(minHeight);
            console.log("minIndex: " + minIndex)

            allBoxes[i].style.position = 'absolute';
            allBoxes[i].style.top = minHeight + 'px';
            allBoxes[i].style.left = allBoxes[minIndex].offsetLeft + 'px';
            console.log(allBoxes[i].style.left);
            BoxHeightArr[minIndex] += allBoxes[i].offsetHeight;
        }
    }
}
