import React from "react";
import "./Analytics.css";

function Analytics(){
    return <div>
        <img className="img-fluid"alt="wordc" src={process.env.PUBLIC_URL+"/worldcloud_materials.png"}></img>
        <img className="img-fluid"alt="wordt" src={process.env.PUBLIC_URL+"/worldcloud_topics.png"}></img>

        <a href="file://stemming_words.html" target="_blank" rel="noopener noreferrer">Link to the Jupyter Notebook</a>
    </div>
}

export default Analytics;