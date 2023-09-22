//const post_id = document.querySelector('#post_id').value;

function onButtonClick(){
    document.getElementById('textInput').className="show";
    document.getElementById('commentWord').className="show";
    document.getElementById('submit').className="show";
  }

  const newFormHandler = async (event) => {
    event.preventDefault();
  
    const userComment = document.querySelector('#textInput').value.trim();
    // const post_id = document.querySelector('#post_id').value; 
    const post_id = event.target.getAttribute('data-post-id'); // Extract post_id from data attribute

    console.log(post_id);
  
    if (userComment) { 
      //console.log(post_id);
  
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ body: userComment }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (response.ok) {
          document.location.replace('/');
        } else {
          //console.log(post_id);
          alert('Failed to create comment');
        }
      } catch (err) {
        console.error(err);
        alert('An error occurred while creating the comment');
      }
  
    }
  };
  
  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);
  

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-comment-form')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
  