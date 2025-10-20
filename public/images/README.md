# Profile Photo Instructions

## How to Add Your Photo

1. **Photo Requirements:**
   - **Format**: JPG, JPEG, or PNG
   - **Size**: At least 256x256 pixels (recommended: 512x512 or higher)
   - **Aspect Ratio**: Square or close to square (1:1 ratio)
   - **Quality**: High quality, professional headshot

2. **File Naming:**
   - Rename your photo to: `fardin-ahsan.jpg`
   - Place it in this folder: `public/images/`

3. **Photo Tips:**
   - Use a professional headshot
   - Good lighting and clear background
   - Professional attire
   - Friendly, approachable expression
   - High resolution for crisp display

4. **Alternative Names:**
   If you prefer a different filename, update the `src` attribute in `components/About.tsx`:
   ```tsx
   src="/images/your-photo-name.jpg"
   ```

5. **Fallback:**
   - If no image is found, the portfolio will show a developer emoji
   - The image will automatically scale to fit the circular frame
   - Responsive design ensures it looks good on all devices

## File Structure
```
public/
└── images/
    ├── fardin-ahsan.jpg  ← Your photo goes here
    └── README.md         ← This file
```
