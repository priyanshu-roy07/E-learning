document.addEventListener('DOMContentLoaded', () => {
    const courses = [
        {
            id: 1,
            title: 'JavaScript for Beginners',
            // description: 'Learn the basics of JavaScript, the most popular programming language in web development.',
            image: 'https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png',
            titleColor: 'black', 
            descriptionColor: 'red'

        },
        {
            id: 2,
            title: 'HTML & CSS Fundamentals',
            // description: 'Understand the building blocks of web development with HTML and CSS.',
            image: 'https://media.licdn.com/dms/image/D5612AQFMLDsjp-BuuQ/article-cover_image-shrink_600_2000/0/1698086941821?e=2147483647&v=beta&t=Vt93MkUmVQlkvHhtEThDfSNjedgBHb6vBgIkMa5svrk',
            titleColor: 'black', 
            descriptionColor: 'darkblue'
        },
        {
            id: 3,
            title: 'React.js Essentials',
            // description: 'Dive into React.js and learn how to build dynamic web applications.',
            image: 'https://media.licdn.com/dms/image/C4E12AQEBVCR2SpRr9g/article-cover_image-shrink_720_1280/0/1625909824541?e=2147483647&v=beta&t=Y_zSoI8cPUR3wQvPyYK15PLWpQJJ0si6OvsuXFnIC18',
            titleColor: 'black', 
            descriptionColor: 'darkblue'
        }
    ];

    const courseList = document.getElementById('course-list');
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'col-md-4';
        courseCard.innerHTML = `
            <div class="card">
                <img src="${course.image}" class="card-img-top" alt="${course.title}">
                <div class="card-body">
                    <h5 class="card-title">${course.title}</h5>
                    <p class="card-text">${course.description}</p>
                    <a href="course.html?id=${course.id}" class="btn btn-primary">Go to course</a>
                </div>
            </div>
        `;
        courseList.appendChild(courseCard);
    });
});