const fs = require('fs');
const files = ['index.html', 'style.css', 'main.js'];

// Read files
const data = {};
files.forEach(f => data[f] = fs.readFileSync(f, 'utf8'));

let replacements = [
    { from: /brand-rose/g, to: 'brand-primary' },
    { from: /brand-pink/g, to: 'brand-secondary' },
    { from: /brand-peach/g, to: 'brand-tertiary' },
    { from: /btn-glossy-rose/g, to: 'btn-glossy-primary' },
    
    // Hex mappings
    { from: /#FF69B4/gi, to: '#89CFF0' }, // Baby blue
    { from: /#FFB6C1/gi, to: '#B0E0E6' }, // Powder blue
    { from: /#ffc0cb/gi, to: '#ADD8E6' }, // Light blue
    { from: /#FFDAB9/gi, to: '#E0FFFF' }, // Light cyan
    { from: /#FFE4E1/gi, to: '#E6F3F8' }, // Very light blue
    { from: /#FFF0F5/gi, to: '#F0F8FF' }, // Alice blue
    { from: /#FDF2F5/gi, to: '#F0F8FF' },
    
    // RGB mappings for various background and shadow uses
    { from: /rgba\(255,\s*105,\s*180/g, to: 'rgba(137, 207, 240' },
    { from: /rgba\(255,\s*182,\s*193/g, to: 'rgba(176, 224, 230' },
    { from: /rgba\(255,\s*218,\s*185/g, to: 'rgba(224, 255, 255' },
    
    // Emojis (specific to theme)
    { from: "['🤍', '💕', '✨', '💖', '💗', '🍓']", to: "['🤍', '🩵', '✨', '💎', '🦋', '❄️']" },
    { from: '🌸', to: '🦋' }
];

files.forEach(f => {
    let content = data[f];
    replacements.forEach(r => {
        content = content.replace(r.from, r.to);
    });
    
    // Specially target the tailwind config keys inside index.html
    if (f === 'index.html') {
        content = content.replace("pink:", "secondary:");
        content = content.replace("peach:", "tertiary:");
        content = content.replace("rose:", "primary:");
    }
    
    fs.writeFileSync(f, content);
});
console.log('Successfully updated theme to pastel blue.');
