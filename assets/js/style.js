// Access section Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const square = entry.target.querySelector('.work-1');

        if (entry.isIntersecting) {
            square.classList.add('work-1-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('work-1-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.work-2');

        if (entry.isIntersecting) {
            square.classList.add('work-2-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('work-2-active');

    });
});

observer.observe(document.querySelector('.animation-access'));

// Create section Animation
const observercreate = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const squarecreate = entry.target.querySelector('.create-photo');

        if (entry.isIntersecting) {
            squarecreate.classList.add('create-photo-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        squarecreate.classList.remove('create-photo-active');

    });

});

observercreate.observe(document.querySelector('.create-images'));


// Manage section Animation

const observermanage = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const squaremanage = entry.target.querySelector('.manage-photo');

        if (entry.isIntersecting) {
            squaremanage.classList.add('manage-photo-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        squaremanage.classList.remove('manage-photo-active');

    });

});

observermanage.observe(document.querySelector('.animation-manage'));

// Amplify section Animation

const observeramplify = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const squareamplify = entry.target.querySelector('.amplify-photo');

        if (entry.isIntersecting) {
            squareamplify.classList.add('amplify-photo-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        squareamplify.classList.remove('amplify-photo-active');

    });

});

observeramplify.observe(document.querySelector('.amplify-images'));

// Get Start section Animation

const observergetstart = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const squarecircle1 = entry.target.querySelector('.circle-1');

        if (entry.isIntersecting) {
            squarecircle1.classList.add('circle-1-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        squarecircle1.classList.remove('circle-1-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.circle-2');

        if (entry.isIntersecting) {
            square.classList.add('circle-2-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('circle-2-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.photo-sm-1');

        if (entry.isIntersecting) {
            square.classList.add('photo-sm-1-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('photo-sm-1-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.photo-sm-2');

        if (entry.isIntersecting) {
            square.classList.add('photo-sm-2-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('photo-sm-2-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.photo-sm-3');

        if (entry.isIntersecting) {
            square.classList.add('photo-sm-3-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('photo-sm-3-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.horn-1');

        if (entry.isIntersecting) {
            square.classList.add('horn-1-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('horn-1-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.horn-2');

        if (entry.isIntersecting) {
            square.classList.add('horn-2-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('horn-2-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.boxes');

        if (entry.isIntersecting) {
            square.classList.add('boxes-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('boxes-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.paper');

        if (entry.isIntersecting) {
            square.classList.add('paper-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('paper-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.photo-1');

        if (entry.isIntersecting) {
            square.classList.add('photo-1-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('photo-1-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.photo-2');

        if (entry.isIntersecting) {
            square.classList.add('photo-2-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('photo-2-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.photo-3');

        if (entry.isIntersecting) {
            square.classList.add('photo-3-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('photo-3-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.d-line-start-1');

        if (entry.isIntersecting) {
            square.classList.add('d-line-start-1-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('d-line-start-1-active');

    });

    entries.forEach(entry => {
        const square = entry.target.querySelector('.d-line-start-2');

        if (entry.isIntersecting) {
            square.classList.add('d-line-start-2-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('d-line-start-2-active');

    });


    entries.forEach(entry => {
        const square = entry.target.querySelector('.d-line-start-3');

        if (entry.isIntersecting) {
            square.classList.add('d-line-start-3-active');

            return; // if we added the class, exit the function
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('d-line-start-3-active');

    });


});

observergetstart.observe(document.querySelector('.start-img-section'));