[All blogs](/blogs) > Project Review

# Project Review: Triple Uni 2024 Year Report

##### Table of Contents

## Report Demo

You may see a **Interactive Demo** on the right side if your screen width is greater than 900px. You may interact with it to view the annual report generated for a dummy user.

If you are visiting from a phone or wish to view it in a seperate page, you may also visit [this link](https://charlieop.github.io/2025YearSummary-Preview/) to experience the report.

## Introduction

Triple Uni is an anonymous blogging platform exclusive to university members of HKU, CUHK, and HKUST. We have more than 24,000 registerd users and service more than 6,000 active users monthly to view, comment and post blogs.

Each year, we summarize each user's activities including their online minutes count, posts count, their rankings relative to other users, achievements earned, and many other datas and create a yearly summary for every user.

This year, we innovatively integrated generative AI to draw an unique painting and write a text summary for every user based on their activity.

### Project Team

This is a team project that requires colabrative efforts from:

- Copywriter - Plans the data to be used and drafts the display text.
- UI Designer - Determines the theme, style and creates the static UI design.
- Backend Developer - Calculates that statistics for each user and buid an api.
- Frontend Developer - Bulild the webpage from the UI design and create animation/ transitions for every page.

## Frontend Implementation

I choose **Vue3 + Nuxt** as the frontend framework for this project and utilized Server Side Rendering to increase the loading speed.

### UI Design Prototype

![figma design screenshot](/imgs/blogs/year-report-2024/figma.webp)

We took the theme of _Alice's Adventures In Wonderland_ and made the design draft above. You may also see our
[design prototype](https://www.figma.com/proto/7ZcQW9qtjcwdirsFghW84H/2024%E5%B9%B4%E7%BB%88%E6%80%BB%E7%BB%93?node-id=1-15&starting-point-node-id=1%3A15&t=EAXuhv1GG593dEb2-1).
We created a design system of 5 font sizes and 6 colors to provide a unified and harmonious layout.

However, the above draft does not include any animtations or page transitions, so it has to be designed during the frontend development.

### Page Framework

Upon preliminary inspection, our report can be divided into various pages that share the same behaviours:

1. Each page should fill up the entire screen.
2. Each page should 'snap' to the screen (i.e. only one page should be visible at the same time except during scrolling).
3. Animations inside the page should automatically play once the page is scrolled into viewport.
4. Images should be lazy loaded to improve performance.

And since we want to ensure the intended viewing experience

5. User cannot scroll to the next page untill everything is displayed on the current page.

<br>

To support such requirements, a page framework was created to handel common functionalities including page registration, display next page and execute functions on the first time a page is visible. It greatly simplifies the code and streamlines the development of new pages. 

### Highlights

To be filled...

## Viewing Statistics

To be filled...


<br>

---

[Back To Top](#) | [View All Blogs](/blogs)
