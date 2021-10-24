import React, { useState, useEffect } from "react";
import axios from "axios";
const Demo = () => {
    var someDate = new Date();
    someDate.setDate(someDate.getDate() + 3);
    var date = someDate.toISOString().substr(0, 10);
    const [text, setText] = useState("");
    const [mood_self_grade, setMood] = useState(3);
    const [pub_date, setPubDate] = useState(date);
    const [data, setData] = useState([]);
    const getData = async () => {
        let url = "https://hackduke2021.herokuapp.com/analyze/get/";
        let result = await axios.get(url).then((result) => result.data);
        setData(result);
        console.log("Data:", data);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="container">
            <h1>Your thought for the day:</h1>
            <textarea
                name="text"
                cols="75"
                rows="5"
                style={{ margin: "25px", padding: "10px", fontSize: "20px" }}
                onChange={(e) => setText(e.target.value)}
            ></textarea>
            <h1> How are you feeling today? </h1>
            <div style={{ marginTop: "25px", fontSize: "20px" }}>
                <div>
                    <input
                        type="radio"
                        id="huey"
                        name="drone"
                        value="1"
                        style={{ margin: "7px" }}
                        onChange={(e) => setMood(e.target.value)}
                        checked
                    />
                    <label for="awful">Awful</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="huey"
                        name="drone"
                        value="2"
                        style={{ margin: "7px" }}
                        onChange={(e) => setMood(e.target.value)}
                        checked
                    />
                    <label for="not very good">Not very good</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="huey"
                        name="drone"
                        value="3"
                        style={{ margin: "7px" }}
                        onChange={(e) => setMood(e.target.value)}
                        checked
                    />
                    <label for="good">Good</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="huey"
                        name="drone"
                        value="4"
                        style={{ margin: "7px" }}
                        onChange={(e) => setMood(e.target.value)}
                        checked
                    />
                    <label for="very good">Very good</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="huey"
                        name="drone"
                        value="5"
                        style={{ margin: "7px" }}
                        onChange={(e) => setMood(e.target.value)}
                        checked
                    />
                    <label for="brilliance">Brilliance</label>
                </div>
                <div>
                    <input
                        id="dateRequired"
                        type="date"
                        name="dateRequired"
                        defaultValue={date}
                        style={{ margin: "7px" }}
                        onChange={(e) => setPubDate(e.target.value)}
                    />
                </div>
            </div>
            <button
                type="submit"
                value="submit"
                style={{ marginTop: "10px", width: "10%", height: "5%" }}
                onClick={() => getData()}
            >
                Submit
            </button>
            {data.length > 0 ? (
                <div>
                    <h1> Remember these times... </h1>
                    {data.map((item) => (
                        <div>
                            <h1>{item.text}</h1>
                            <h1>{item.mood_self_grade}</h1>
                            <h1>{item.pub_date}</h1>
                        </div>
                    ))}
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Demo;
