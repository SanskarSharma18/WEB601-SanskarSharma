# S_Sharma_WEB601Assignments_SpaceExploration

## Overview

Welcome to my Angular application for the WEB601 course assignments. In this project, I'm developing a single-page application focused on the theme of Space Exploration. The application aims to showcase captivating information about various aspects of space, including planets, satellites, space missions, astronauts, and more.

## About Me

- **Name:** Sanskar Sharma
- **Student ID:** 0794654

## Application Features

- Display detailed information about planets, satellites, space missions, and astronauts.
- Include engaging content, images, and facts related to space exploration.
- Utilize Angular components to present information in an organized and visually appealing manner.

## Assignment Progress

### Assignment 1

- Initial setup and implementation of the Content-Card component for showcasing space-related content.

### Assignment 2

- **New Component - Content-list:**
   - Created a new Angular component named `Content-list`.

- **Content-list Component:**
   - Defined an array of 6 or more `Content` items within the `Content-list` component.

- **ngFor Directive in Content-list HTML:**
   - Utilized the `ngFor` directive to display 5 `Content-card` components in the `Content-list` HTML.

- **Content-card Styling:**
   - Styled each `Content-card` with a 1-pixel border, header tag for the title, and organized display of content details.

- **Image Click Event:**
   - Implemented a click event on the image to display the Content's id and title in the console.

- **Styling Enhancements:**
   - Added necessary padding and margins for improved visual layout.

- **First Content Card Border:**
   - Applied a black solid border of 2 pixels around the first `Content-card`.

- **App-root Component Modification:**
   - Removed `Content-card` from `app-root` HTML and added `Content-list` for the home page display.

### Assignment 3

- **Version Update:**
   - Changed the version in `package.json` to `0.0.3`.

- **Content Enhancement:**
   - Added more content items to the array with at least 2 different type values and some with no type set.

- **Custom Pipe - TypeFilter:**
   - Created a custom pipe named `TypeFilter` to filter content items by type.

- **HTML Modification in Content-list:**
   - Modified HTML to display separate lists by type using the `TypeFilter` pipe.

- **Styling Enhancement:**
   - Styled `Content-card` components differently based on their type.

- **User Input Functionality:**
   - Added an input field to search for content items by title and display a message indicating whether the title exists or not.

### Assignment 4

- **Version Update:**
   - Changed the version in `package.json` to `0.0.4`.

- **Default Image Handling:**
   - Implemented logic in `Content-Card` component to display a default image if the `imgURL` is not set.

- **Attribute Directive - Hover-Affect:**
   - Created an attribute directive named `Hover-Affect` to add hover effects to content types and tags.

- **Border Highlight (Bonus):**
   - Applied the `Hover-Affect` directive to `Content-card` components to change the border when hovered over, with special handling for the first and last cards in the loop.

Feel free to explore the code and provide any feedback. Thank you for checking out my project!
