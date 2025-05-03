
const root = document.getElementById('root');

function createWelcomePage() {
  const welcomeDiv = document.createElement('div');
  welcomeDiv.classList.add('welcome-page');

  const heading = document.createElement('h1');
  heading.innerText = 'Welcome to Mini Blog';
  heading.style.fontSize = "6rem";

  const welcomeText = document.createElement("p");
  welcomeText.innerText = "Hey there, Word Wizard! ✨ Ready to turn thoughts into stories? Welcome to your blogging adventure!";
  welcomeText.style.textAlign = "justify";
  welcomeText.style.fontSize = "2.2rem";
  welcomeText.style.color = "white";
  welcomeText.style.padding = "0 20px";

  const startButton = document.createElement('button');
  startButton.innerText = 'Enter Blog';
  startButton.classList.add('btn', 'btn-light', 'mt-4');

  startButton.addEventListener('click', () => {
    root.innerHTML = '';
    createBlogApp();
  });

  welcomeDiv.appendChild(heading);
  welcomeDiv.appendChild(welcomeText);
  welcomeDiv.appendChild(startButton);
  root.appendChild(welcomeDiv);
}

function createBlogApp() {
  const container = document.createElement('div');
  container.classList.add('container', 'mt-5');

  const title = document.createElement('h2');
  title.innerText = 'Mini Blog';
  title.classList.add('mb-4', 'text-center');
  container.appendChild(title);

  // Blog Form with Author Name
  const form = document.createElement('form');
  form.classList.add('mb-4');

  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('placeholder', 'Blog Title');
  titleInput.classList.add('form-control', 'mb-2');

  const contentInput = document.createElement('textarea');
  contentInput.setAttribute('placeholder', 'Blog Content');
  contentInput.classList.add('form-control', 'mb-2');

  const authorInput = document.createElement('input');
  authorInput.setAttribute('type', 'text');
  authorInput.setAttribute('placeholder', 'Your Name (Author)');
  authorInput.classList.add('form-control', 'mb-2');

  const addButton = document.createElement('button');
  addButton.setAttribute('type', 'submit');
  addButton.classList.add('btn', 'btn-primary');
  addButton.innerText = 'Add Blog';

  form.appendChild(titleInput);
  form.appendChild(contentInput);
  form.appendChild(authorInput);
  form.appendChild(addButton);
  container.appendChild(form);

  const blogGrid = document.createElement('div');
  blogGrid.classList.add('blog-grid');
  container.appendChild(blogGrid);

  // Add blog logic
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const blogTitle = titleInput.value.trim();
    const blogContent = contentInput.value.trim();
    const authorName = authorInput.value.trim();

    if (blogTitle === '' || blogContent === '' || authorName === '') {
      alert('Please fill in all fields.');
      return;
    }

    // Create card with title, content, author, like button, and delete button
    const card = document.createElement('div');
    card.classList.add('card', 'p-3');

    const cardTitle = document.createElement('h5');
    cardTitle.innerText = blogTitle;

    const cardBody = document.createElement('p');
    cardBody.innerText = blogContent;

    const cardAuthor = document.createElement('p');
    cardAuthor.innerText = `By: ${authorName}`;
    cardAuthor.style.fontStyle = 'italic';
    cardAuthor.style.fontSize = '0.9rem';

    // Likes functionality
    const likeBtn = document.createElement('button');
    likeBtn.innerText = 'Like';
    likeBtn.classList.add('btn', 'btn-success', 'btn-sm');
    let likeCount = 0;

    const likeCountDisplay = document.createElement('span');
    likeCountDisplay.innerText = ` ${likeCount}`;
    likeBtn.addEventListener('click', () => {
      likeCount++;
      likeCountDisplay.innerText = ` ${likeCount}`;
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('btn', 'btn-danger', 'btn-sm', 'mt-2');
    deleteBtn.addEventListener('click', () => {
      blogGrid.removeChild(card);
    });

    // Append elements to card
    card.appendChild(cardTitle);
    card.appendChild(cardBody);
    card.appendChild(cardAuthor);
    card.appendChild(likeBtn);
    card.appendChild(likeCountDisplay);
    card.appendChild(deleteBtn);
    blogGrid.appendChild(card);

    // Clear form after submission
    titleInput.value = '';
    contentInput.value = '';
    authorInput.value = '';
  });

  root.appendChild(container);
}

window.onload = createWelcomePage;  // Ensures the page loads after the content is ready
