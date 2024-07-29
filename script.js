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
        "Cast all your anxiety on him because he cares for you - 1 Peter 5:7"


    ];

    const messageContainer = document.getElementById('inspiration-message');
    const timerContainer = document.getElementById('timer');

    function getDailyMessage() {
        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        const msSinceStartOfDay = now - startOfDay;
        const dayIndex = Math.floor(msSinceStartOfDay / (24 * 60 * 60 * 1000)) % messages.length;
        return messages[dayIndex];
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

    const dailyMessage = getDailyMessage();
    messageContainer.textContent = dailyMessage;

    const typingSpeed = 100; // milliseconds per character
    const animationDuration = (dailyMessage.length * typingSpeed) / 1000; // in seconds

    messageContainer.style.width = 'auto';
    messageContainer.style.animation = `typing ${animationDuration}s steps(${dailyMessage.length}, end) forwards, blink-caret 0.75s step-end infinite`;

    updateTimer();
    setInterval(updateTimer, 1000);
});
