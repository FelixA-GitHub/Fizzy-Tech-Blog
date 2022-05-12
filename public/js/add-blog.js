async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="blog-title"]').value;
    const blog_url = document.querySelector('input[name="blog-url"]').value;
  
    const response = await fetch(`/api/blogs`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        blog_url
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);
  