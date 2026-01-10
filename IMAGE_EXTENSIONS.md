# Abhivyakti Website - Image Extension Guide

This document outlines the key areas in the Abhivyakti website where you can add your own images to customize the site.

## Components with Image Extension Points

### 1. HeroSection.js
- **Logo**: Current placeholder: `https://via.placeholder.com/250x80?text=ABHIVYAKTI`
- **Change to**: Replace with your actual Abhivyakti logo image URL
- **File Path**: `frontend/src/components/HeroSection.js`
- **Line**: `<img src="..." alt="Abhivyakti Logo" />`

### 2. EventsGallery.js
- **Event Images**: Each event/competition has an `images` array with placeholder URLs
- **Current Example**: `"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"`
- **Change to**: Replace with your actual event photos
- **File Path**: `frontend/src/components/EventsGallery.js`
- **Location**: Inside the `detailedEvents` array, each event has an `images` property

### 3. CoordinatorsSection.js
- **Coordinator Photos**: Placeholder avatars are used for coordinators
- **Current Example**: `<div className="placeholder-avatar">👨‍💼</div>`
- **Change to**: Replace with actual coordinator photos by adding a `photo` property to each coordinator object
- **File Path**: `frontend/src/components/CoordinatorsSection.js`
- **Location**: In the coordinator objects, replace placeholder with actual image URLs

## How to Add Your Images

### Method 1: Upload to Image Hosting Service
1. Upload your images to a service like Imgur, Cloudinary, or any image hosting service
2. Get the direct image URLs
3. Replace the placeholder URLs in the respective components

### Method 2: Local Images in Public Folder
1. Create an `images` folder in the `public` directory
2. Place your images in `public/images/`
3. Reference them using: `/images/your-image-name.jpg`

### Method 3: Backend API Integration
1. Set up image upload functionality in your Django backend
2. Store images on your server
3. Update the API calls to return image URLs for coordinators and events

## Specific Image Areas to Customize

### Hero Section
- Main logo (replace the placeholder image)
- Background imagery (if desired, by modifying the CSS)

### Events Gallery
- Event photos for each event/competition
- Multiple photos per event are supported

### Coordinators Section
- Individual coordinator photos
- Profile pictures for all coordinators

### Other Potential Areas
- Wing icons (though these currently use emojis)
- Background patterns or decorative elements

## Example of Image Replacement

For EventsGallery.js, change from:
```javascript
images: [
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
]
```

To:
```javascript
images: [
  "https://your-image-hosting-service.com/your-event-image.jpg"
]
```

## Important Notes

- Ensure images are optimized for web (proper size and format)
- Use consistent image dimensions for best visual results
- Consider image loading performance
- Test image loading on different devices and network speeds
- Maintain the aspect ratio of images to prevent distortion
- For coordinator photos, use square images (recommended 300x300 pixels or similar)

## Image Requirements

- Format: JPG, PNG, or WebP recommended
- Size: Optimize for web delivery (under 2MB per image)
- Dimensions: For coordinators, square images work best (e.g., 300x300)
- For events, consistent dimensions across all event images for uniform look