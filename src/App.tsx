import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="about-wrapper">
            <div className="about-card">
                <h1 className="about-title">👋 About Me</h1>
                <p className="about-text">
                    Hello! My name is <strong>Nurkhan Tulepbegren</strong>.
                    I am a 4th-year Information Systems specialist student at <strong>KBTU</strong>.
                    I’m passionate about technology, self-development, and creating meaningful projects. 🚀
                </p>

                <h2 className="section-title">✨ My Hobbies</h2>
                <div className="hobbies">
                    <div className="hobby-card">♟️ Playing chess</div>
                    <div className="hobby-card">📚 Reading books</div>
                </div>

                <h2 className="section-title">📩 Contact Me</h2>
                <ul className="contact-list">
                    <li>
                        <a href="mailto:n_tulepbergen@kbtu.kz">n_tulepbergen@kbtu.kz</a>
                    </li>
                    <li>
                        <a href="https://github.com/NurkhanTulepbergen" target="_blank" rel="noreferrer">
                            github.com/NurkhanTulepbergen
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default App;
