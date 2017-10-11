/* globals $, _ */
var postRequest = $.ajax( "https://jsonplaceholder.typicode.com/posts" );
var $posts = $( "#posts" );

function templatePost( post ){
    return `
      <div class="post">
        <h3>${post.title}</h3>
        <h4>Written By: ${post.userId}</h4>
        <p>${post.body}</p>
      </div>
    `;
}

function appendPosts( posts ){
    var firstFive = _
        .take( posts, 5 )
        .reduce(
            ( output, post ) => output + templatePost( post ),
            ""
        );

    $posts.append( firstFive );
}

postRequest.then( appendPosts );
