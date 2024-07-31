document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
        "Act as if what you do makes a difference. It does. - William James",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
        "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
        "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
        "Love all, trust a few, do wrong to none. - William Shakespeare",
        "The best thing to hold onto in life is each other. - Audrey Hepburn",
        "To love and be loved is to feel the sun from both sides. - David Viscott",
        "The giving of love is an education in itself. - Eleanor Roosevelt",
        "Love doesn't make the world go 'round. Love is what makes the ride worthwhile. - Franklin P. Jones",
        "Love is composed of a single soul inhabiting two bodies. - Aristotle",
        "Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny. - Steve Maraboli",
        "The greatest step towards a life of simplicity is to learn to let go. - Steve Maraboli",
        "Change has to come for life to struggle forward. - Helen Hollick",
        "Cry me a river, build a bridge, and get over it. - Justin Timberlake",
        "If you’re brave enough to say goodbye, life will reward you with a new hello. - Paulo Coelho",
        "Sometimes the hardest part isn’t letting go but rather learning to start over. - Nicole Sobon",
        "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. - Albert Einstein",
        "The only true wisdom is in knowing you know nothing. - Socrates",
        "Turn your wounds into wisdom. - Oprah Winfrey",
        "It is not the man who has too little, but the man who craves more, that is poor. - Seneca",
        "Knowing yourself is the beginning of all wisdom. - Aristotle",
        "Do not take life too seriously. You will never get out of it alive. - Elbert Hubbard",
        "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
        "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
        "Life is what happens when you’re busy making other plans. - John Lennon",
        "The best way to predict your future is to create it. - Abraham Lincoln",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
        "Until death, all defeat is psychological.",
        "The strength to rise is found in the grace to fall.",
        "The essence of bravery is not the absence of fear but the willingness to proceed in its presence.",
        "Nothing can be gained without losing, even heaven demands death.",
        "Your only limit is your mind.",
        "When you are not fed love on a silver spoon, you learn to lick it off knives.",
        "Show me a man of average ability but extraordinary desire, and I will show you a winner every time - Andrew Carnegie",
        "Waste no time arguing about what a good man should be. Be one.",
        "Dead people receive more flowers than the living ones because regret is stronger than gratitude.",
        "In loneliness, the lonely one eats himself; in a crowd, the many eat him. Now choose.",
        "If you have been brutally broken, but still have the courage to be gentle to other living beings, then you're a badass with the heart of an angel. - Keanu Reeves",
        "Defeat is a state of mind, and no one is ever defeated until defeat has been accepted as a reality.",
        "Cast all your anxiety on him because he cares for you - 1 Peter 5:7",
        "You did the best you could with what you knew at the time. \n Don't let new wisdom lead you to condemn yourself over old struggles. \n Forgive yourself and move forward. - Morgan Richard Olivier",
        "For though I fall I will rise again. Though I sit in darkness, the Lord will be my light - Micah 7:8",
        "Who sees the human face correctly: the photographer, the mirror, or the painter?",
        "You don't have to be the best person, you just have to be someone that is trying to do better.",
        "Your visions will become clear only when you can look into your own heart. Who looks outside, dreams; who looks inside, awakes - Carl Jung",
        "Never trade a heart that loves you for eyes that desire you.",
        "If I am worth anything later, I am worth something now. For wheat is wheat, even if people think it is grass in the beginning - Van Gogh",
        "Life is way too short to spend it battling with yourself. \n Your existence is not a mistake, it's a gift. \nSo enjoy every moment of it.",
        "You're a language I'm no longer fluent in but still remember how to read",
        "To love is to recognize the space between souls and gracefully adapt to the here and now",
        "Well done is better than well said - Benjamin Franklin"
    ];

    const messageContainer = document.getElementById('inspiration-message');
    const timerContainer = document.getElementById('timer');
    const randomQuoteButton = document.getElementById('random-quote-button');
    const submitCommentButton = document.getElementById('submit-comment');
    const newCommentInput = document.getElementById('new-comment');
    const cloud1 = document.getElementById('cloud-1');
    const cloud2 = document.getElementById('cloud-2');
    const cloud3 = document.getElementById('cloud-3');
    const commentToggleButton = document.getElementById('comment-toggle-button');
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const commentsSection = document.getElementById('comments-section');

    let isGenerating = false;
    const typingSpeed = 50;

    commentToggleButton.addEventListener('click', function () {
        commentsSection.classList.toggle('active');
    });

    function getDailyMessage() {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 0);
        const dayOfYear = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
        return messages[dayOfYear % messages.length];
    }

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    function updateTimer() {
        const now = new Date();
        const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const timeRemaining = nextMidnight - now;

        const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

        timerContainer.textContent = `New quote in: ${hours}h ${minutes}m ${seconds}s`;
    }

    function displayMessage(message) {
        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                messageContainer.innerHTML = message.substring(0, i + 1) + '<span class="caret">|</span>';
                i++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                messageContainer.innerHTML = message + '<span class="caret">|</span>'; 
                document.querySelector('.caret').style.animation = 'blink-caret 0.75s step-end infinite'; 
                isGenerating = false;
                randomQuoteButton.textContent = "Show Random Quote";
                randomQuoteButton.disabled = false;
            }
        }
        typeWriter();
    }

    function submitComment() {
        const comment = newCommentInput.value;
        if (comment) {
            displayCommentOnCloud(comment);
            newCommentInput.value = '';
        }
    }

    function displayCommentOnCloud(comment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = comment;
        if (cloud1.childElementCount === 0) {
            cloud1.appendChild(commentDiv);
        } else if (cloud2.childElementCount === 0) {
            cloud2.appendChild(commentDiv);
        } else if (cloud3.childElementCount === 0) {
            cloud3.appendChild(commentDiv);
        } else {
            cloud1.innerHTML = '';
            cloud2.innerHTML = '';
            cloud3.innerHTML = '';
            cloud1.appendChild(commentDiv);
        }
    }

    function resetCommentsAtMidnight() {
        const now = new Date();
        const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const timeUntilMidnight = nextMidnight - now;

        setTimeout(() => {
            cloud1.innerHTML = '';
            cloud2.innerHTML = '';
            cloud3.innerHTML = '';
            resetCommentsAtMidnight();
        }, timeUntilMidnight);
    }

    randomQuoteButton.addEventListener('click', function () {
        if (!isGenerating) {
            isGenerating = true;
            randomQuoteButton.textContent = "Generating...";
            randomQuoteButton.disabled = true;
            const randomMessage = getRandomMessage();
            displayMessage(randomMessage);
        }
    });

    submitCommentButton.addEventListener('click', submitComment);

    commentToggleButton.addEventListener('click', function () {
        commentsSection.classList.toggle('hidden');
    });

    themeToggleButton.addEventListener('click', function () {
        document.body.classList.toggle('night-mode');
        themeToggleButton.textContent = document.body.classList.contains('night-mode') ? '🌙' : '☀️';
    });

    const dailyMessage = getDailyMessage();
    isGenerating = true;
    randomQuoteButton.textContent = "Generating...";
    randomQuoteButton.disabled = true;
    displayMessage(dailyMessage);
    updateTimer();
    setInterval(updateTimer, 1000);

    resetCommentsAtMidnight();
});