import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./LearnMorePage.css";
import BlogCard from "./BlogCard";
import logo from "./logo.png";
import posts from "./posts";

function LearnMorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "about";
  const navigate = useNavigate();

  return (
    <div className="learn-more-container">
        <div className="tab-header">
        <img src={logo} alt="Logo" className="tab-logo" /> 

          <div className="tabs">
            <button
              onClick={() => setSearchParams({ tab: "about" })}
              className={currentTab === "about" ? "active" : ""}
            >
              About
            </button>
            <button
              onClick={() => setSearchParams({ tab: "newsletter" })}
              className={currentTab === "newsletter" ? "active" : ""}
            >
              Newsletter
            </button>
            <button
              onClick={() => setSearchParams({ tab: "blog" })}
              className={currentTab === "blog" ? "active" : ""}
            >
              Blog
            </button>
        </div>

      </div>

      <div className="tab-content">
        {currentTab === "about" && (
          <div>
            <h2>About Lariat.app</h2>
            <p>Lariat.app is a timelining tool. It allows you to take all the documents you're trying to get a handle on (medical records, deposition transcripts, news articles, etc.) 
                see them in a timeline, and make changes to them.  Invented for lawyers, private investigators, and journalists, Lariat.app takes the guesswork out of narrowing down what events happened 
                at what time in the past.</p>
            <br></br>
            <h2>Our Story</h2>
            <p>The story of Lariat.app began in 2019.  That year, our founder was interning at a law firm.  He was given a tedious assignment: he was asked to create a timeline of a 
              massive, years-long fraud case.  
              To accomplish this, he did the same thing detectives do in old noir movies: cordoned off a conference room, tacked post-it notes on the walls, and related them to one another with pins
              and pieces of string.  While this timeline helped the firm visualize the progression of the case, it came up short in a lot of ways: it couldn't be sorted and filtered, 
              it couldn't be exported to a spreadsheet or a text file, it couldn't be expanded or contracted, and it couldn't (at least, without a lot of effort) be taken off the 
              wall and shown to a judge or a jury. </p>
          </div>
          
        )}
        {currentTab === "newsletter" && (
        <div>
            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter for exclusive updates and offers.</p>
            <form
                className="newsletter-form"
                onSubmit={async (e) => {
                    e.preventDefault();
                    const name = e.target.name.value.trim();
                    const email = e.target.email.value.trim();
                    const interest = e.target.interest.value.trim();

                    if (!name || !email || !interest) {
                    alert("Please complete all fields.");
                    return;
                    }

                    try {
                    const response = await fetch("https://script.google.com/macros/s/AKfycbwREU4BUamPiT2iGA60t1k-F6J8N6wLsur9KVaitvD-XR_3g3p1sUXKurXjXjc3LMK2oA/exec", {
                        method: "POST",
                        body: JSON.stringify({ name, email, interest }),
                        headers: {
                        "Content-Type": "application/json",
                        },
                    });

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
                }}
                >
            <div className="form-top-row">
                <div className="form-field">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                </div>

                <div className="form-field">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                </div>

                <div className="form-field full-width">
                <label htmlFor="interest">What interests you about our product?</label>
                <textarea id="interest" name="interest" rows="4" required />
                </div>
            </div>

            <button type="submit">Subscribe</button>
            </form>
        </div>
        )}
        {currentTab === "blog" && (
          <div className="blog-list">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                summary={post.summary}
                slug={post.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LearnMorePage;