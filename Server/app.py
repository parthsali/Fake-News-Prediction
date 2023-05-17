from flask import Flask, request, jsonify
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import PassiveAggressiveClassifier
import pickle
import pandas as pd
from sklearn.model_selection import train_test_split
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
tfvect = TfidfVectorizer(stop_words='english', max_df=0.7)
loaded_model = pickle.load(open('./model/model.pkl', 'rb'))
dataframe = pd.read_csv('./model/news.csv')
x = dataframe['text']
y = dataframe['label']
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=0)

def fake_news_det(news):
    tfid_x_train = tfvect.fit_transform(x_train)
    tfid_x_test = tfvect.transform(x_test)
    input_data = [news]
    vectorized_input_data = tfvect.transform(input_data)
    prediction = loaded_model.predict(vectorized_input_data)
    return prediction

@app.route('/')
def home():
    return "Hello World homepage"

@app.route('/predict', methods=['POST'])
def predict():
    
    try:
        data = request.get_json()
        print(data)
        pred = fake_news_det(data)
        print(pred)
    except:
        pred = ["Something went wrong"]

    return jsonify({'prediction':pred[0] })


if __name__ == '__main__':
    app.run(debug=True)