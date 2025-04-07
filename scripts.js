// Video pause when modal closes
document.addEventListener('DOMContentLoaded', () => {
    const videoModal = document.getElementById('videoModal');
    const popupVideo = document.getElementById('popupVideo');
  
    videoModal.addEventListener('hidden.bs.modal', () => {
      if (popupVideo) {
        popupVideo.pause();
        popupVideo.currentTime = 0;
      }
    });
  });
  
  // Chatbot message handling
  function sendMessage() {
    const input = document.getElementById("chatInput");
    const chatBox = document.getElementById("chatBox");
    const userMessage = input.value.trim();
    if (userMessage !== "") {
      chatBox.innerHTML += <div class="text-end mb-1"><span class="badge bg-secondary">${userMessage}</span></div>;
      chatBox.innerHTML += <div class="text-muted small mb-2">🤖 I'm just a demo bot. Please consult a doctor for real help.</div>;
      input.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  // Enter key sends chat message
  document.getElementById("chatInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  });