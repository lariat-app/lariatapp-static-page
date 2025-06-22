export async function handleNewsletterSubmit(e) {
    e.preventDefault();
  
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const interest = e.target.interest.value.trim();
  
    if (!name || !email || !interest) {
      alert("Please complete all fields.");
      return;
    }
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbw6D4I5t4NZO6lFEPiq5zvhZRrnKJgdKGI1s94_X7xRGSFewMbTCPkThVbs2N_En21WbQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, interest }),
        }
      );
  
      const result = await response.json();
  
      if (result.result === "success") {
        alert("You're subscribed!");
        e.target.reset();
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  }