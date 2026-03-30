# 💖 Project Blueprint: Afi’s Romantic Birthday Website

## 1. 🎀 Project Overview
* **Project Name:** Afi’s Birthday Surprise
* **Theme:** Romantic, Dreamy, Soft Aesthetic.
* **Target Audience:** Afi (The Princess).
* **Goal:** A high-end, interactive, and emotional digital gift featuring smooth animations and a love-themed UI.

---

## 2. 🎨 UI/UX & Aesthetic Requirements
* **Color Palette:** Soft Pink (`#FFB6C1`), Peach (`#FFDAB9`), and Pastel Rose gradients.
* **Background:** Fixed pastel gradient with a dynamic **Floating Hearts** animation (using JS or CSS keyframes).
* **Components:** Rounded cards (`rounded-3xl`), soft glassmorphism (`backdrop-blur-md`), and glowing button effects.
* **Typography:** Playful yet elegant sans-serif (e.g., 'Inter' or 'Poppins') with cursive accents for the letter.

---

## 3. 🏗️ Page Structure & Sections

### 3.1 Landing Page (Hero)
* **Heading:** "Happiest Birthday My Princess ❤️" (Centered, soft entrance animation).
* **Hero Card:** * Title: "Heyy Baby ❤️"
    * Body: "This is something special I made just for you."
* **Primary Action:** "Open 💌" Button with a pulsing glow effect that scrolls to the Letter Section.

### 3.2 Love Letter Section
* **Design:** A "Handwritten Style" card with a subtle paper texture and gold/pink border.
* **Content:**
    > "My Dearest Afi,
    >
    > On your special day, I want you to know how much you mean to me.
    > You are my safe place, my happiness, my everything.
    >
    > I have loved you for so long, and the day you said yes (January 18, 2025) is the most special moment of my life.
    >
    > You love me more than anything, and I promise I will always cherish that.
    > I can't imagine my life without you.
    >
    > Happy Birthday my princess ❤️
    > I love you more than words can ever say.
    >
    > Forever yours,
    > Your hubby kutty ❤️"

### 3.3 Interactive Section: "Why You're Special 🎂"
* **Layout:** A 3x3 Grid of 9 interactive cards.
* **Interaction:** On Click, cards perform a 3D flip animation to reveal:
    1. You are my safe place
    2. You are my happiness
    3. You are my everything
    4. You make my life beautiful
    5. I can't imagine life without you
    6. You are my dream come true
    7. You are my peace
    8. You are my forever
    9. You are my princess

### 3.4 Memory & Final Surprise
* **Highlight:** "January 18, 2025 — The day you said YES 💍" with a glowing heart animation nearby.
* **The Final Click:** A button labeled "Final Surprise 💖".
* **Reveal Logic:** On click, trigger a confetti burst or heart explosion effect with the text: 
    *"If anyone asks who's in my brain… it's always my wife Afi ❤️"*

---

## 4. ⚙️ Technical Requirements

### 4.1 Tech Stack
* **HTML5/CSS3:** Structure and custom animations.
* **Tailwind CSS:** For fast, responsive styling and gradients.
* **JavaScript:** For the heart particle system, card flip logic, and smooth scroll triggers.

### 4.2 Key JavaScript Features
* **Floating Hearts:** A function that generates `<span>` elements with heart emojis at random positions and animates them upward.
* **Smooth Scroll:** Implementation of `behavior: 'smooth'` for all navigation.
* **Confetti/Hearts Burst:** Using a library (like `canvas-confetti`) or custom CSS for the Final Surprise.

---

## 5. 📱 Responsiveness
* **Mobile:** Stack the 3x3 grid into a 1-column or 2-column layout.
* **Touch:** Ensure buttons and cards have large enough hit areas for mobile tapping.

---

## 6. 📌 Footer
* **Text:** "Made with endless love by your hubby kutty ❤️" (Small, centered, elegant).