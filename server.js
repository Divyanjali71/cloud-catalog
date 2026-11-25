
const express = require('express');
const path = require('path');

const app = express();

// Port configuration
const PORT = process.env.PORT || 8080;

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// API 1: Cloud Services
app.get('/api/services', (req, res) => {
    const services = [
        {
            serviceId: 1,
            serviceName: "Amazon EC2",
            category: "IaaS",
            pricingModel: "Pay-as-you-go"
        },
        {
            serviceId: 2,
            serviceName: "AWS Lambda",
            category: "PaaS",
            pricingModel: "Pay per execution"
        },
        {
            serviceId: 3,
            serviceName: "Amazon S3",
            category: "IaaS",
            pricingModel: "Pay per storage"
        },
        {
            serviceId: 4,
            serviceName: "Google Cloud Run",
            category: "PaaS",
            pricingModel: "Pay per request"
        },
        {
            serviceId: 5,
            serviceName: "Microsoft 365",
            category: "SaaS",
            pricingModel: "Subscription"
        }
    ];

    res.json(services);
});

// API 2: System Status
app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        developer: "Your Name",
        environment: "Cloud PaaS"
    });
});

// Local server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Cloud Catalog running at http://localhost:${PORT}`);
    });
}

// Export app for Vercel
module.exports = app;
