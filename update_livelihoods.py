with open(r'c:\Users\nikit\Desktop\fresh\app\thematic-areas\livelihoods\page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the two lines about income and success rate
content = content.replace(
    '    { number: "₹2.5Cr+", label: "Income Generated" },\n    { number: "75%", label: "Success Rate" }',
    ''
)

with open(r'c:\Users\nikit\Desktop\fresh\app\thematic-areas\livelihoods\page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
