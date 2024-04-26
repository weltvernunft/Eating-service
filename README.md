# EATLY

## Node version

20.12.0

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

# Eatly Project

## Description
Eatly is a web application for ordering food. The main page provides users with an overview of available dishes and services, as well as allows them to check prices. Additionally, users can explore various news and provide feedback on the website.

## Project Goals
The main goal of this project is to practice the following skills:
- **Semantic markup**: Using appropriate HTML tags considering their semantics for better understanding of content.
- **Responsive design**: Creating web pages that display correctly on various devices and screen resolutions.
- **Cross-browser compatibility**: Ensuring project compatibility with popular browsers such as Google Chrome, Firefox, Opera, Edge, etc.
- **Working with decorative elements, pseudo-elements**: Utilizing CSS for styling and formatting web page elements, including the use of pseudo-elements to create decorative effects.
- **Animation**: Implementing animations to enhance user experience and draw attention to interactive elements.

## Expected Results
1. **Homepage**: Contains cards of dishes.
2. **Authorization screen**: Provides fields for entering data.

## Main Requirements
- **Technology stack**: React/Vue, TS (optional but preferable)
- **Semantic markup**: Using appropriate HTML tags and attributes.
- **Responsive design**: Ensuring correct display on various resolutions: 1920, 1024, 375, as well as intermediate resolutions (1366, 1280, 768).
- **Cross-browser compatibility**: Compatibility with Google Chrome, Firefox, Opera, Edge.
- **Use of decorative elements, pseudo-elements**: Styling with CSS, including pseudo-elements.
- **Animation**: Implementation of animations for smooth user experience.

## Resources
- **Project Design**: [Figma](https://www.figma.com)
- **Live Preview**: [Live Preview](https://www.example.com)
- **MockAPI**: Recommended tool for simulating requests and creating placeholders.

## Evaluation Criteria
- **Semantics and HTML**: Compliance with semantics and proper HTML usage.
- **Design Layout**: Adherence to the design layout.
- **Browser Compatibility**: Proper functioning on different browsers.
- **Clean Code**: Absence of unnecessary comments, logs, warnings, and errors.
- **Adaptability**: Website adaptability to different resolutions.
- **Animations**: Smoothness and quality of animations.
- **Project Structure**: Well-structured code and project organization.

## Additional Requirements (Optional)
- **Additional Pages**: Implementation of additional pages, if time permits. Notify before submission.
- **Custom UI Components**: Developing custom UI components instead of using ready-made libraries.

**Node Version Used:** 20.12.0

## Launch Project
To launch the project, run the following command:


- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
