# Amazon Review Sentiment Analyzer

A web application that analyzes the sentiment of Amazon product reviews using deep learning. The application can determine whether a review expresses positive or negative sentiment and provides a confidence score for its prediction.

![app_sentimental.png](https://data-projects-cco.s3.us-east-1.amazonaws.com/Images_Project/app_sentiment.png)

## Features

- **Real-time Sentiment Analysis**: Instantly analyze Amazon product reviews to determine sentiment
- **Confidence Scoring**: Get a percentage-based confidence level for each prediction
- **Modern UI**: Engaging user interface with animations and responsive design
- **Review Writing Tips**: Helpful suggestions for writing effective product reviews

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap 5
- **Animations**: Particles.js for background animations
- **Backend**: Python with Flask framework
- **Deep Learning**: TensorFlow LSTM model for sentiment analysis
- **Text Processing**: NLTK for text preprocessing (tokenization, stemming, etc.)

## How It Works

The application uses a trained LSTM (Long Short-Term Memory) neural network model to classify the sentiment of review text. Here's the process:

1. User enters an Amazon product review in the text area
2. The text is preprocessed (converted to lowercase, removing punctuation, stemming, etc.)
3. The cleaned text is converted to sequences using a pre-trained tokenizer
4. The sequences are padded to ensure uniform length
5. The model predicts the sentiment (positive or negative) and provides a confidence score
6. Results are displayed with appropriate visual indicators

## Project Structure

```
Sentimental_Analysis/
├── app.py                  # Flask application main file
├── requirements.txt        # Required packages
├── templates/              # HTML templates
│   ├── index.html          # Main application page
├── static                  # js and css files
    ├── scripts.js
    ├── styles.css
├── README.md               # Project documentation
└──
```

## Installation

1. Clone this repository:

```bash
git clone https://github.com/CCOcampo/Sentimental_Analysis.git
cd Sentimental_Analysis
```

2. Create and activate a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install the required packages:

```bash
pip install -r requirements.txt
```

4. Run the notebook **sentiment_analysis.ipynb** to generate and download the files **lstm_model.h5** and **tokenizer.pkl** needed for sentiment analysis.

5. Run the application:

```bash
python app.py
```

6. Open your browser and go to `http://localhost:5000`

## Use Cases

- **Market Research**: Analyze customer feedback to understand product strengths and weaknesses
- **Product Development**: Identify common pain points mentioned in negative reviews
- **Customer Service**: Monitor sentiment trends to improve customer satisfaction
- **Competitive Analysis**: Compare sentiment across similar products
- **Review Filtering**: Automatically categorize reviews by sentiment for easier parsing

## Future Enhancements

- Add multi-language support for international reviews
- Implement aspect-based sentiment analysis to identify specific product features mentioned
- Create visualization dashboards for sentiment trends over time
- Add support for CSV/Excel upload for batch processing
- Integrate with Amazon API for direct review pulling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Acknowledgments

- TensorFlow team for their amazing deep learning framework
- NLTK for natural language processing tools
- Bootstrap team for the responsive design components
- Particles.js for the beautiful background animations
