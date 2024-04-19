// window.onload = function() {
//     var msnry = new Masonry( '.items', {
//       itemSelector: 'div',
//       columnWidth: '.items div',
//       percentPosition: true,
//       gutter: 20
//     });
// };

var grid = document.querySelector('.items');

imagesLoaded( grid, function() {
  // Initialize Masonry after all images have loaded
  var msnry = new Masonry( grid, {
    itemSelector: '.items > div',
    // itemSelector: 'div',
    percentPosition: true,
    gutter: 20
  });
});
