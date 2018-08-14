from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home_page():
    return render_template('home_page.html')

@app.route('/developer')
def developer():
    return render_template('developer.html')

@app.route('/engineer')
def engineer():
    return render_template('engineer.html')

@app.route('/more')
def details():
    return render_template('more.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__' :
    app.run(debug=True)
