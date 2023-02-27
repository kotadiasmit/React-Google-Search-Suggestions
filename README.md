In this project, let's build a **Google Search Suggestions** app by applying the concepts we have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-output.gif" alt="google search suggestions output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-sm-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-lg-output.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, all suggestions in the `suggestionsList` should be displayed
- When a value is provided in the search input, then display the suggestions which includes the search input irrespective of case
- When the arrow of a suggestion is clicked, then the value of the search input should be updated with the respective suggestion clicked
- The `GoogleSuggestions` component receives the `suggestionsList` as a prop. It consists of a list of suggestion objects with the following properties in each suggestion object

  |    Key     | Data Type |
  | :--------: | :-------: |
  |     id     |  Number   |
  | suggestion |  String   |

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/google-search-suggestions-component-structure-breakdown.png" alt="google search suggestions component structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/GoogleSuggestions/index.js`
- `src/components/GoogleSuggestions/index.css`
- `src/components/SuggestionItem/index.js`
- `src/components/SuggestionItem/index.css`
</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/google-logo.png](https://assets.ccbp.in/frontend/react-js/google-logo.png) alt should be **google logo**
- [https://assets.ccbp.in/frontend/react-js/google-search-icon.png](https://assets.ccbp.in/frontend/react-js/google-search-icon.png) alt should be **search icon**
- [https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png](https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png) alt should be **arrow**

</details>
