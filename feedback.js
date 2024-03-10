//Shopsy as an example------------------------------------------------>

const websiteFeedback = `
{
  "bug": [
    "UI Bug 1: Poor Navigation",
    "UI Bug 2: Slow Loading Times"
  ],
  "feature": [
    "Feature Suggestion 1: Introduce AR functionality for certain product categories to allow users to virtually try on items before making a purchase decision.",
    "Feature Suggestion 2: Simplify the checkout process by introducing a one-click checkout option, making it quicker and more convenient for users to complete their purchases."
  ],
  "accessibility": [
    "Accessibility Issue 1: Users with disabilities should easily understand any issues and how to resolve them.",
    "Accessibility Issue 2: Include captions or transcripts for videos to make content accessible to users with hearing impairments."
  ]
}
`;

//Parse the JSON string----------------------------------------------->
const feedbackObject = JSON.parse(websiteFeedback);

//Loop through the object and print the first value of each primary key-------------------------------->
for (let key in feedbackObject) {
    if (feedbackObject.hasOwnProperty(key) && Array.isArray(feedbackObject[key]) && feedbackObject[key].length > 0) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}:`, feedbackObject[key][0]);
    }
  }