/* globals $, _ */
var host = "https://jsonplaceholder.typicode.com";
var postRequest = $.ajax( `${host}/posts` );
var $posts = $( "#posts" );

function templatePost( post ){
    return `
      <div class="post">
        <h3>${post.title}</h3>
        <h4>
          Written By: <span class="author-${post.userId}"></span>
        </h4>
        <p>${post.body}</p>
      </div>
    `;
}

function templatePosts( posts, post ){
    var newPost = templatePost( post );

    return `${posts}${newPost}`;
}

function getAuthor( requests, post ){
    var id = post.userId;

    if( !requests[id] ){
        requests[id] = $.ajax( `${host}/users/${id}` );
    }

    return requests;
}

function injectAuthors( authors ){
    authors.forEach( ( author ) => {
        var $targets = $( `.author-${author.id}` );

        if( $targets.length ){
            $targets.text( author.name );
        }
    } );
}

function appendPosts( posts ){
    var firstFive = _.take( posts, 5 );
    var requests = firstFive.reduce( getAuthor, {} );
    var markup = firstFive.reduce( templatePosts, "" );

    var requestPromises = Object.values( requests );

    $posts.append( markup );

    Promise
        .all( requestPromises )
        .then( injectAuthors );
}

postRequest.then( appendPosts );
