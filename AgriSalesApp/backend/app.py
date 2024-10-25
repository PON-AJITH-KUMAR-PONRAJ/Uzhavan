from flask import Flask
from backend.config import Config
from backend.models import db
from backend.routes import auth, product, order

app = Flask(__name__)
app.config.from_object(Config)

# Initialize the database
db.init_app(app)

# Register blueprints for different routes
app.register_blueprint(auth.bp)
app.register_blueprint(product.bp)
app.register_blueprint(order.bp)

if __name__ == "__main__":
    app.run(debug=True)
