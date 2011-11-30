(function(a) {
  var MAX = 50;
  var len = a.length;
  for (var i = 0; i < MAX; i++) {
    document.write('<p>' + a[i%len] + '</p>');
  }
}([
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lacinia lacus id magna tristique vitae laoreet metus vehicula. Duis semper leo a odio porttitor fermentum. Cras non arcu felis. Nulla quis est ac ante condimentum mattis vel a leo. Duis placerat nibh felis. Sed eget orci eros, a interdum sem. Sed vel metus feugiat dolor pellentesque mattis eget et dui. Nulla in lorem quam.',
'Aliquam viverra lacus pulvinar nisi dictum ultricies placerat erat fermentum. Pellentesque sed nulla id risus aliquet rutrum quis quis enim. Aenean et nulla ut mauris venenatis ultricies. Nunc dictum fermentum varius. Fusce vestibulum lorem in velit viverra feugiat. Ut imperdiet orci odio, quis blandit risus. Vestibulum pharetra sodales tempor.',
'Curabitur molestie libero eget libero ultrices ac ultricies augue molestie. Nam in dui est, sit amet accumsan quam. Cras in neque ligula, ut suscipit turpis. Cras pellentesque fermentum viverra. Nunc euismod risus quis lorem cursus vitae euismod odio lobortis. Sed at neque eget odio varius interdum. Nulla sit amet nulla enim. Donec nec urna luctus nisi elementum pulvinar et et sem. Integer porttitor dapibus quam eget semper. Aliquam molestie vehicula vestibulum. Curabitur vel pellentesque nisl.',
'Vivamus non augue felis. Pellentesque pretium pharetra tempor. Ut tincidunt, sem vitae dapibus ultricies, elit nisi placerat turpis, eu adipiscing nunc sem et massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis dignissim arcu, quis laoreet lectus lacinia sed. Sed in convallis elit. Morbi cursus eleifend facilisis. Aliquam vel euismod ipsum. Cras eu viverra velit. Mauris interdum, neque a tincidunt viverra, neque neque congue quam, vitae mollis augue sapien vel massa. In dictum, erat sit amet pellentesque semper, tortor quam commodo purus, non mattis enim diam quis quam. Donec a magna eu risus pellentesque accumsan. Nulla tempor dignissim est eu suscipit.',
'Cras egestas lacinia nibh eget vulputate. Nulla accumsan fringilla mi, eget scelerisque est consequat varius. Ut id justo non lacus suscipit tincidunt nec ut elit. Fusce et dui turpis, congue rhoncus velit. Fusce in consequat erat. Fusce risus quam, accumsan et molestie et, porta at quam. Aenean vel sapien dolor, eget hendrerit odio. Fusce ante eros, pulvinar eget tempus ut, congue quis diam. Cras aliquet dictum velit a eleifend.',
]));
