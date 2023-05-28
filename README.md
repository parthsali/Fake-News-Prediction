# Fake-News-Prediction


The fake news prediction web app is built with a React.js frontend and a Flask backend, which handles the API calls and hosts the machine learning model used for predicting fake news.

The React.js frontend provides a user-friendly interface where users can input news articles or headlines they suspect might be fake. The input is then sent to the Flask backend via API calls.

The Flask backend is responsible for receiving the API requests from the frontend and processing the data. It utilizes the machine learning model, which has been trained to classify news articles as either real or fake based on various features and patterns.

Once the prediction is obtained, the Flask backend sends the result back to the React.js frontend through API responses. The frontend then displays the prediction to the user, indicating whether the input news article or headline is likely to be fake or genuine.

Overall, this web app leverages React.js for the frontend to provide a visually appealing and interactive user experience, while the Flask backend handles the API calls and incorporates the machine learning model to perform accurate fake news predictions.
