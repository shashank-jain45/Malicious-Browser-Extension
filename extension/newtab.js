document.addEventListener("DOMContentLoaded", async () => {
    const quoteElement = document.getElementById("quote");
  
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      quoteElement.textContent = `"${data.slip.advice}"`;
    } catch (error) {
      quoteElement.textContent = "Failed to load thought 💭";
    }
  });
  