async function fetchAdvice() {
  const quoteContainer = document.getElementById("quote-container");

  try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      quoteContainer.textContent = `"${data.slip.advice}"`;
  } catch (error) {
      console.error("Error fetching advice:", error);
      quoteContainer.textContent = "Failed to load thought 💭";
  }
}

fetchAdvice();
