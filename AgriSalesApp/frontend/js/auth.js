document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        const data = await response.json();
        alert("Login successful! Redirecting...");
        // Redirect based on user role
        if (data.role === 'admin') {
            window.location.href = "admin_dashboard.html";
        } else if (data.role === 'farmer') {
            window.location.href = "farmer_dashboard.html";
        } else {
            window.location.href = "customer_dashboard.html";
        }
    } else {
        alert("Login failed. Please check your credentials.");
    }
});
