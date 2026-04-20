import os
import re

files = ['index.html', 'style.css', 'main.js']
data = {}
for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        data[f] = file.read()

replacements = [
    (r'brand-rose', 'brand-primary'),
    (r'brand-pink', 'brand-secondary'),
    (r'brand-peach', 'brand-tertiary'),
    (r'btn-glossy-rose', 'btn-glossy-primary'),
    
    (r'(?i)#FF69B4', '#89CFF0'),
    (r'(?i)#FFB6C1', '#B0E0E6'),
    (r'(?i)#ffc0cb', '#ADD8E6'),
    (r'(?i)#FFDAB9', '#E0FFFF'),
    (r'(?i)#FFE4E1', '#E6F3F8'),
    (r'(?i)#FFF0F5', '#F0F8FF'),
    (r'(?i)#FDF2F5', '#F0F8FF'),
    
    (r'rgba\(255,\s*105,\s*180', 'rgba(137, 207, 240'),
    (r'rgba\(255,\s*182,\s*193', 'rgba(176, 224, 230'),
    (r'rgba\(255,\s*218,\s*185', 'rgba(224, 255, 255'),
    
    (r"\['🤍',\s*'💕',\s*'✨',\s*'💖',\s*'💗',\s*'🍓'\]", "['🤍', '🩵', '✨', '💎', '🦋', '❄️']"),
    (r'🌸', '🦋')
]

for f in files:
    content = data[f]
    for from_str, to_str in replacements:
        content = re.sub(from_str, to_str, content)
    
    if f == 'index.html':
        content = content.replace("pink:", "secondary:")
        content = content.replace("peach:", "tertiary:")
        content = content.replace("rose:", "primary:")
        content = content.replace("bg-brand-secondary/20", "bg-brand-primary/20")
        content = content.replace("hover:bg-brand-secondary", "hover:bg-brand-primary")
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print("Successfully updated theme to pastel blue via python.")
