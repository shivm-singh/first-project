// Simple JavaScript to handle form submission
document.getElementById("item-report-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const itemName = document.getElementById("item-name").value;
    const itemStatus = document.getElementById("item-status").value;
    const itemLocation = document.getElementById("item-location").value;
  
    const newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.classList.add(itemStatus === "lost" ? "lost" : "found");
  
    newItem.innerHTML = `
      <h3>${itemStatus === "lost" ? "Lost" : "Found"}: ${itemName}</h3>
      <p>Location: ${itemLocation}</p>
    `;
  
    const itemsContainer = document.querySelector(".items");
    itemsContainer.appendChild(newItem);
  
    // Reset form after submission
    document.getElementById("item-report-form").reset();
  });
  