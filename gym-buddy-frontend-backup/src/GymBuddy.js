import React from 'react';
import './GymBuddy.css'; // Importing the CSS file

const GymBuddy = () => {
    return (
        <div style={{ backgroundColor: "grey" }}>
            <h1 align="center" style={{ fontFamily: "impact" }}>Gym Buddy Locator</h1>
            <img src="/logo.png" className="center" alt="Gym Buddy Logo" />
            <p className="center">
                Have you ever wanted to go to the gym but didn't want to go alone? Gym Buddy is a student accessible
                app that allows you to look for your ideal workout buddy. Just sign up with your student email.
                Filter out the characteristics you are looking for in a gym buddy. And see who you find.
            </p>
            <form className="center">
                <p>KSU Email:</p>
                <input type="text" className="inbox" />
                <br />
                <input type="submit" className="button" />
            </form>
        </div>
    );
}

export default GymBuddy;
