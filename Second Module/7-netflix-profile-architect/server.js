const express = require('express');
const app = express();

// 1. Added middleware to parse JSON bodies
app.use(express.json());

app.patch('/profiles/:profileId', (req,res)=>{
    // 2. Extract data from params, query, and body
    const {profileId} = req.params;
    const {source} = req.query;
    const {theme , language} = req.body;

    // 3. final JSON response
    return res.json({
        message: `Updating profile ${profileId} from ${source} with language ${language}.`
    })
});

app.listen(3000, () => {
    console.log('Server running on port 3000')
});