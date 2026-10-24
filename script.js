let count = 0;
const maxTissues = 10;

const dispenseBtn = document.getElementById('dispense-btn');
const tissue = document.getElementById('tissue');
const countDisplay = document.getElementById('tissue-count');

dispenseBtn.addEventListener('click', () => {
    // Check if limit is reached
    if (count >= maxTissues) {
        return;
    }

    // 1. Increment tissue count
    count++;
    countDisplay.textContent = count;

    // 2. Trigger tissue pull animation
    tissue.classList.add('pulled');

    // 3. Reset tissue animation so it can be pulled again
    setTimeout(() => {
        tissue.classList.remove('pulled');
    }, 800);

    // 4. Check if we reached 10 on this click
    if (count === maxTissues) {
        dispenseBtn.textContent = "No More Tissues!Sorry Bud😔";
        dispenseBtn.disabled = true;
        dispenseBtn.style.cursor = "not-allowed";
        dispenseBtn.style.opacity = "0.6";
    }
});