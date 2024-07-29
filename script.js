document.addEventListener("DOMContentLoaded", function () {
    const messages = [
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

    let isGenerating = false;
    const typingSpeed = 50; 

    function getDailyMessage() {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const msSinceStartOfDay = now - startOfDay;
        const dayIndex = Math.floor(msSinceStartOfDay / (24 * 60 * 60 * 1000)) % messages.length;
        return messages[dayIndex];
    }

    function getRandomMessage() {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    function updateTimer() {
        const now = new Date();
        const nextNoon = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
        const timeRemaining = nextNoon - now;

        const hours = Math.floor((timeRemaining % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeRemaining % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeRemaining % (60 * 1000)) / 1000);

        timerContainer.textContent = `New quote in: ${hours}h ${minutes}m ${seconds}s`;
    }

    function displayMessage(message) {
        let i = 0;
        messageContainer.textContent = '';
        function typeWriter() {
            if (i < message.length) {
                messageContainer.innerHTML += message.charAt(i);
                i++;
                setTimeout(typeWriter, typingSpeed); 
            } else {
                isGenerating = false; 
                randomQuoteButton.textContent = "Show Random Quote"; 
                randomQuoteButton.disabled = false; 
            }
        }
        typeWriter();
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

    const dailyMessage = getDailyMessage();
    isGenerating = true;
    randomQuoteButton.textContent = "Generating...";
    randomQuoteButton.disabled = true; 
    displayMessage(dailyMessage);
    updateTimer();
    setInterval(updateTimer, 1000);
});
