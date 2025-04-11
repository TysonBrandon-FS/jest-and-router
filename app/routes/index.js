const express = require("express");
const router = express.Router();
const fs = require('fs');

// Read data from file
const getData = () => {
    try {
        return JSON.parse(fs.readFileSync('data.json'));
    } catch {
        const defaultData = [
            {id: 1, name: "Brandon"},
            {id: 2, name: "Nick"}
        ];
        fs.writeFileSync('data.json', JSON.stringify(defaultData));
        return defaultData;
    }
}

// Save data to file
const saveData = (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data));
}

router.get("/", (req, res) => {
    const data = getData();
    res.status(200).json({
        message: "GET to /API",
        data: data,
        metadata: { hostname: req.hostname, method: req.method}
    })
})

router.get("/:id", (req,res) => {
    let { id } = req.params;
    const data = getData();
    let index = data.findIndex(item => item.id === parseInt(id));

    if (index > data.length) {
        return res.status(404).json({
            message: "Not Found",
            metadata: { hostname: req.hostname, method: req.method }
        });
    }

    res.status(200).json({
        message: "GET by ID to /API",
        data: data[index],
        metadata: { hostname: req.hostname, method: req.method}
    })
})

router.post("/", (req,res) => {
    const { name } = req.body
    const data = getData();
    let newID = data.length + 1

    if(!name) {
        res.status(400).json({
            message: "Post Failed",
            metadata: { hostname: req.hostname, method: req.method}
        })
    }

    data.push({id: newID, name: name})
    saveData(data);

    res.status(200).json({
        message: "POST to /API",
        data: data,
        metadata: { hostname: req.hostname, method: req.method}
    })
})

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const data = getData();

    if (!name) {
        return res.status(400).json({
            message: "Patch Failed",
            metadata: { hostname: req.hostname, method: req.method }
        });
    }

    let index = data.findIndex(item => item.id === parseInt(id));

    if (index > data.length) {
        return res.status(404).json({
            message: "Not Found",
            metadata: { hostname: req.hostname, method: req.method }
        });
    }

    data[index].name = name;
    saveData(data);

    res.status(200).json({
        message: "PATCH to /API",
        data: data,
        metadata: { hostname: req.hostname, method: req.method }
    });
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const data = getData();
    let index = data.findIndex(item => item.id === parseInt(id));
    
    if (index > data.length) {
        return res.status(404).json({
            message: "Cant Delete No ID",
            metadata: { hostname: req.hostname, method: req.method }
        });
    }
    data.splice(index, 1);
    saveData(data);
    
    res.status(200).json({
        message: "DELETE to /API",
        data: data,
        metadata: { hostname: req.hostname, method: req.method }
    });
});

module.exports = router;