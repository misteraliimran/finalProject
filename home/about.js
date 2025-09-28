document.addEventListener("DOMContentLoaded", async () => {
    const user = localStorage.getItem("activeUser");

    if (!user) {
      console.error("User tapılmadı! Login olunmalıdır.");
      return;
    }

    const token = JSON.parse(user).token;

    try {
      const response = await fetch("http://195.26.245.5:9505/api/clients/get-details", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error("Məlumat yüklənmədi!");
      }

      const data = await response.json();

      document.getElementById("user-name").innerText = data.name || "-";
      document.getElementById("user-surname").innerText = data.surname || "-";
      document.getElementById("user-email").innerText = data.email || "-";
      document.getElementById("user-username").innerText = data.username || "-";

    } catch (error) {
      console.error("Xəta:", error);
    }
  });